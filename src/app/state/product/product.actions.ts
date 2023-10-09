import {createAction, props} from '@ngrx/store';
import {Product, ProductShop} from '@modules/product/models/product.model';

export const fetchProductsAction = createAction('[Product] Fetch Products');
export const fetchProductsSuccessAction = createAction(
  '[Product] Fetch Products - Success',
  props<{ products: Product[] }>()
);
export const fetchProductsErrorAction = createAction(
  '[Product] Fetch Products - Error',
  props<{ message: string }>()
);

export const addCartAction = createAction(
  '[Product] Add Cart',
  props<{ product: Product }>()
);
export const addCartSuccessAction = createAction(
  '[Product] Add Cart - Success',
  props<{ productsToShop: ProductShop[] }>()
);
export const addCartErrorAction = createAction(
  '[Product] Add Cart - Error',
  props<{ message: string }>()
);
