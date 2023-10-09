import {AfterViewInit, Component} from '@angular/core';
import {ProductFacade} from '@modules/product/facade/product.facade';
import {Product} from '@modules/product/models/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements AfterViewInit {
  constructor(private _facade: ProductFacade) {}

  get working$(): Observable<boolean> {
    return this._facade.working$;
  }

  get products$(): Observable<Product[]> {
    return this._facade.products$;
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this._facade.fetchProducts();
    }, 500);
  }

  public addToCard(product: Product): void {
    this._facade.addCart(product);
  }
}
