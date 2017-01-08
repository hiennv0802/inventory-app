import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product/product.model'

@Component({
  selector: 'app-product-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  onProductSelected: EventEmitter<Product>;
  currentProduct: Product;

  constructor() { }

  ngOnInit() {
  }

  clicked(product: Product): void {

  }
}
