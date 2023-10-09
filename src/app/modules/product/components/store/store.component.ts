import {AfterViewInit, Component} from '@angular/core';
import {ProductFacade} from '@modules/product/facade/product.facade';
import { ShoppingFacade } from '@modules/product/facade/shopping.facade';
import {Product} from '@modules/product/models/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements AfterViewInit {
  constructor(
    private _facade: ProductFacade,
    private _shoppingFacade: ShoppingFacade) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._facade.fetchProducts();
    }, 500);
  }

  get products$(): Observable<Product[]> {
    return this._facade.products$;
  }

  public handleProduct(product: Product):void {
    this._shoppingFacade.fetchShopping(product);
  }

  get working$(): Observable<boolean> {
    return this._shoppingFacade.working$;
  }

  get completed$(): Observable<boolean> {
    return this._shoppingFacade.completed$;
  }
}
