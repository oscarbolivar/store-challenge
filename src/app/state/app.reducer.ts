import {productReducer} from '@state/product/product.reducer';
import { shoppingReducer } from './shopping/shopping.reducer';

export const APP_REDUCERS = { product: productReducer, shopping: shoppingReducer };
