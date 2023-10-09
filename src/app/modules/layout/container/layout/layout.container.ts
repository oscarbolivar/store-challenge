import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PRODUCT_CART, PRODUCT_STORE} from '@core/constants/routes';
import {ProductFacade} from '@modules/product/facade/product.facade';
import { ShoppingFacade } from '@modules/product/facade/shopping.facade';
import { Product } from '@modules/product/models/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout.container.html',
  styleUrls: ['./layout.container.sass']
})
export class LayoutContainer {
  cont = 5
  constructor(
    private _productFacade: ProductFacade,
    private _shoppingFacade: ShoppingFacade,
    private _router: Router
  ) {}

  public goToStore(): void {
    this._router.navigate(PRODUCT_STORE);
  }

  public goToCart(): void {
    this._router.navigate(PRODUCT_CART);
  }

  get working$(): Observable<boolean> {
    return this._productFacade.working$;
  }

  get completed$(): Observable<boolean> {
    return this._productFacade.completed$;
  }

  get shoppingProducts$(): Observable<Product[]> {
    return this._shoppingFacade.productsShopping$
  }
}
