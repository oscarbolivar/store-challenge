import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '@modules/product/models/product.model';

@Injectable()
export class ShoppingService {
  constructor() {}

  public techShopping$(): Observable<Product[]> {
    return of([{
      id: '1',
      name: 'Pilas AA',
      sku: '111',
      description: 'Pilas AA',
    }])
  }
}
