import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, take } from 'rxjs/operators';
import { of } from 'rxjs';
import * as shoppingActions from './shopping.actions';

@Injectable()
export class ShoppingEffect {
  constructor(private actions$: Actions) {}

  fetchShopping$ = createEffect(() =>{
    console.log('se ejecuta el effect');
    
    return this.actions$.pipe(
      ofType(shoppingActions.fetchShoppingAction),
      take(1),
      catchError((error) =>
        of(shoppingActions.fetchShoppingErrorAction({ message: error.message }))
      )
    )
  });
}
