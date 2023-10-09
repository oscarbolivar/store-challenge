import {AfterViewInit, Component} from '@angular/core';
import { ProductFacade } from '@modules/product/facade/product.facade';
import { ProductShop } from '@modules/product/models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements AfterViewInit {
  constructor(
    private _facade: ProductFacade
  ) {}

  ngAfterViewInit(): void {
  }

  get productsToShop$(): Observable<ProductShop[]> {
    return this._facade.productsToShop$
  }
}
