import {AfterViewInit, Component} from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_STORE } from '@core/constants/routes';
import { ShoppingFacade } from '@modules/product/facade/shopping.facade';
import { Product } from '@modules/product/models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements AfterViewInit {
  constructor(private _shoppingFacade: ShoppingFacade, private _router: Router) {}

  ngAfterViewInit(): void {
  }

  public goToStore(): void {
    this._router.navigate(PRODUCT_STORE);
  }
  
  get shoppingProducts$(): Observable<Product[]> {
    return this._shoppingFacade.productsShopping$
  }

  public remove(product: Product):void {
    this._shoppingFacade.fetchRemoveShopping(product);
  }
}
