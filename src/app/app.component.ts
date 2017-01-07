import { Component } from '@angular/core';
import { Product } from './product/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product: Product;

  constructor() {
    let newProduct = new Product(
      'Nike',
      'A nike shoes',
      '/assets/images/nike.jpg',
      ['Men', 'Acessories', 'Hats'],
      29.99
    )

    this.product = newProduct;
  }
}
