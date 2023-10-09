import { Shopping } from '@modules/product/models/shopping.model';
import {INITIAL_PRODUCT_STATE, ProductState} from '@state/product/product.state';
import { INITIAL_SHOPPING_STATE, ShoppingState } from './shopping/shopping.state';

export interface AppState {
  product: ProductState;
  shopping: ShoppingState;
}

export const INITIAL_APP_STATE = {
  product: INITIAL_PRODUCT_STATE,
  shopping: INITIAL_SHOPPING_STATE
};
