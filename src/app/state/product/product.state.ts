import {Product, ProductShop} from '@modules/product/models/product.model';

export interface ProductState {
  products: Product[];
  productsToShop: ProductShop[];
  working: boolean;
  completed: boolean;
  message: string;
}

export const INITIAL_PRODUCT_STATE: ProductState = {
  products: [],
  productsToShop: [],
  working: false,
  completed: false,
  message: ''
};
