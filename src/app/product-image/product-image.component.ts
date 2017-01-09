import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model'

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
