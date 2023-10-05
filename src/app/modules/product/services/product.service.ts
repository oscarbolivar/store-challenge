import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '@modules/product/models/product.model';

@Injectable()
export class ProductService {
  constructor() {}

  public fetchProducts$(): Observable<Product[]> {
    return of([{
      id: '1',
      name: 'Pilas AA',
      sku: '111',
      description: 'Pilas AA',
    }, {
      id: '2',
      name: 'Palustre',
      sku: '222',
      description: 'Palustre',
    }])
  }
}
