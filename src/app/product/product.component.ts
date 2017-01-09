import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model'
@Component({
  selector: 'app-product',
  inputs: ['product'],
  host: {'class': 'item'},
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor() { }

  ngOnInit() {
  }
}
