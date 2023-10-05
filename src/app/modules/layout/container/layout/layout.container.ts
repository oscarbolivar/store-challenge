import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PRODUCT_CART, PRODUCT_STORE} from '@core/constants/routes';
import {ProductFacade} from '@modules/product/facade/product.facade';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout.container.html',
  styleUrls: ['./layout.container.sass']
})
export class LayoutContainer {
  constructor(
    private _productFacade: ProductFacade,
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
}
