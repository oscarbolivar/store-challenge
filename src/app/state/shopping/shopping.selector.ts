import {createSelector} from '@ngrx/store';
import {AppState} from '@state/app.state';
import { ShoppingState } from './shopping.state';

const shoppingModule = (state: AppState) => state.shopping;

export const productsShoppingSelect = createSelector(
  shoppingModule,
  (state: ShoppingState) => state.products
);

export const workingShoppingSelect = createSelector(
  shoppingModule,
  (state: ShoppingState) => state.working
);

export const completedShoppingSelect = createSelector(
  shoppingModule,
  (state: ShoppingState) => state.completed
);
