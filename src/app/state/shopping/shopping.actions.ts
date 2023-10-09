import {createAction, props} from '@ngrx/store';
import { Product } from '@modules/product/models/product.model';

export const fetchShoppingAction = createAction('[Shopping] Fetch Shopping');
export const fetchShoppingWorkingAction = createAction(
  '[Shopping] Fetch Shopping',
  props<{working: boolean}>()
);
export const fetchShoppingSuccessAction = createAction(
  '[Shopping] Fetch Shopping',
  props<{products: Product[]}>()
);
export const fetchShoppingErrorAction = createAction(
  '[Shopping] Fetch Shopping - Error',
  props<{ message: string }>()
);