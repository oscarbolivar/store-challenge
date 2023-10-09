import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as featureAction from '@state/product/product.actions';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {ProductService} from '@modules/product/services/product.service';
import {HttpErrorResponse} from '@angular/common/http';
import { ProductFacade } from '@modules/product/facade/product.facade';

@Injectable()
export class ProductEffect {
  constructor(
    private _actions$: Actions,
    private _service: ProductService,
    private _facade: ProductFacade
  ) {}

  public fetchProducts$ = createEffect(() =>
    this._actions$.pipe(
      ofType(featureAction.fetchProductsAction),
      switchMap(() =>
        this._service
          .fetchProducts$()
          .pipe(
            map((products) =>
              featureAction.fetchProductsSuccessAction({ products })
            )
          )
      ),
      catchError((error: HttpErrorResponse) =>
        of(featureAction.fetchProductsErrorAction({ message: error.message }))
      )
    )
  );

  public addCart$ = createEffect(() =>
    this._actions$.pipe(
      ofType(featureAction.addCartAction),
      withLatestFrom(this._facade.productsToShop$, this._facade.products$),
      map(([action, productsToShop]) => {
        try {
          const indexProduct = productsToShop.findIndex(
            (item) => item.idProduct === action.product.id
          );
          if (indexProduct === -1) {
            productsToShop = [
              ...productsToShop,
              {
                idProduct: action.product.id,
                name: action.product.name,
                quantity: 1,
              }
            ];
          } else {
            const { quantity: newQuantity } = productsToShop[indexProduct];
            productsToShop = productsToShop.filter(
              (product) => product.idProduct !== action.product.id
            );
            productsToShop = [
              ...productsToShop,
              {
                idProduct: action.product.id,
                name: action.product.name,
                quantity: newQuantity + 1
              }
            ];
          }
          return featureAction.addCartSuccessAction({productsToShop});
        } catch (err) {
          if (err instanceof Error) {
            const {message} = err;
            return featureAction.addCartErrorAction({message});
          }
          return featureAction.addCartErrorAction({message: 'An error has occurred adding the product.'})
        }
      }))
  )
}


