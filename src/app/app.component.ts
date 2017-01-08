import { Component } from '@angular/core';
import { Product } from './product/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    let newProduct1 = new Product(
      'Nike',
      'A nike shoes',
      '/assets/images/nike.jpg',
      ['Men', 'Acessories', 'Hats'],
      29.99
    )

    let newProduct2 = new Product(
      'Adidas',
      'Adidas hat',
      '/assets/images/adidas.jpg',
      ['men','women'],
      99.99
    )

    let newProduct3 = new Product(
      'Owen',
      'Owen man',
      'assets/images/owen.jpg',
      ['men', 'women'],
      39.99
    )

    this.products = [newProduct1, newProduct2, newProduct3];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked is:', product);
  }
}
