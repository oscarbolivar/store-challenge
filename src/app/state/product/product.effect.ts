import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as featureAction from '@state/product/product.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ProductService} from '@modules/product/services/product.service';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ProductEffect {
  constructor(
    private _actions$: Actions,
    private _service: ProductService,
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
}
