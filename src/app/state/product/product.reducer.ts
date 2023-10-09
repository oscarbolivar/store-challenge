import {createReducer, on} from '@ngrx/store';
import {INITIAL_PRODUCT_STATE} from './product.state';
import * as action from './product.actions';

export const productReducer = createReducer(
  INITIAL_PRODUCT_STATE,
  on(action.fetchProductsAction, (state) => ({
    ...state,
    working: true,
    completed: false
  })),
  on(action.fetchProductsSuccessAction, (state, { products }) => ({
    ...state,
    products,
    working: false,
    completed: true,
    message: ''
  })),
  on(action.addCartAction, (state) => ({
    ...state,
    working: true,
    completed: false
  })),
  on(action.addCartSuccessAction, (state, { productsToShop }) => ({
    ...state,
    productsToShop,
    working: false,
    completed: true,
    message: ''
  })),
  on(
    action.fetchProductsErrorAction,
    action.addCartErrorAction,
    (state, { message }) => ({
      ...state,
      working: false,
      completed: false,
      message
    }))
);
