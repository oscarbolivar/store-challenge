import {Observable, throwError} from 'rxjs';
import { delay, take } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '@state/app.state';
import {Product} from '@modules/product/models/product.model';
import * as actionShopping from '@state/shopping/shopping.actions';
import * as selectorShopping from '@state/shopping/shopping.selector';


@Injectable()
export class ShoppingFacade {
  constructor(private _store: Store<AppState>) {}

  public productsShopping$: Observable<Product[]> = this._store.pipe(
    select(selectorShopping.productsShoppingSelect)
  );

  public working$: Observable<boolean> = this._store.pipe(
    select(selectorShopping.workingShoppingSelect)
  );

  public completed$: Observable<boolean> = this._store.pipe(
    select(selectorShopping.completedShoppingSelect)
  );

  public initShopping(): void {
    this._store.dispatch(actionShopping.fetchShoppingAction());
  }

  public fetchShopping(product: Product): void {
    this.productsShopping$.pipe(
      take(1),
      delay(500)).
      subscribe((products: Product[]) => {
      try {
        const productsShopping: Product[] = [...products];
        productsShopping.push(product)
        this._store.dispatch(actionShopping.fetchShoppingSuccessAction({products: productsShopping}));
      } catch (error) {
        throwError(new Error('Error al agregar el producto en la compra'));
      }
    });
  }

  public fetchRemoveShopping(product: Product): void {
    this.productsShopping$.pipe(
      take(1),
      delay(500)).
      subscribe((products: Product[]) => {
      try {
        const productsShopping: Product[] = [...products];
        const indexToRemove = productsShopping.findIndex((item: Product) => item === product);
        productsShopping.splice(indexToRemove, 1);
        this._store.dispatch(actionShopping.fetchShoppingSuccessAction({products: productsShopping}));
      } catch (error) {
        throwError(new Error('Error al eliminar el producto en la compra'));
      }
    });
  }
  
}
