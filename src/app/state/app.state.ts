import {INITIAL_PRODUCT_STATE, ProductState} from '@state/product/product.state';

export interface AppState {
  product: ProductState;
}

export const INITIAL_APP_STATE = {
  product: INITIAL_PRODUCT_STATE
};
