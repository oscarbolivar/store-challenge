import {Product} from '@modules/product/models/product.model';

export interface ShoppingState {
  products: Product[];
  working: boolean;
  completed: boolean;
  message: string;
}

export const INITIAL_SHOPPING_STATE: ShoppingState = {
  products: [],
  working: false,
  completed: false,
  message: ''
};
