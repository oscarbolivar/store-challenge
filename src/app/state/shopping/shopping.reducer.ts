import { createReducer, on } from '@ngrx/store';
import { INITIAL_SHOPPING_STATE } from './shopping.state';
import * as shoppingActions from './shopping.actions';

export const shoppingReducer = createReducer(
  INITIAL_SHOPPING_STATE,
  on(shoppingActions.fetchShoppingAction, (state) => ({
    ...state,
    working: true,
    completed: false
  })),
  on(shoppingActions.fetchShoppingSuccessAction, (state, { products }) => ({
    ...state,
    products,
    working: false,
    completed: true,
  })),
  on(shoppingActions.fetchShoppingErrorAction, (state, { message }) => ({
    ...state,
    working: false,
    completed: false,
    message
  }))
);
