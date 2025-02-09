import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-grid',
  imports: [CurrencyPipe],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.css'
})
export class ProductsGridComponent {

  products = [
    {
      imageUrl: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      title: 'Mountain Retreat',
      description: 'Find peace in natural sanctuaries', 
      price: 200
    },
    {
      imageUrl: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      title: 'Mountain Retreat',
      description: 'Find peace in natural sanctuaries', 
      price: 200
    },
    {
      imageUrl: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      title: 'Mountain Retreat',
      description: 'Find peace in natural sanctuaries', 
      price: 200
    },
    {
      imageUrl: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      title: 'Mountain Retreat',
      description: 'Find peace in natural sanctuaries', 
      price: 200
    },
    {
      imageUrl: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      title: 'Mountain Retreat',
      description: 'Find peace in natural sanctuaries', 
      price: 200
    },
    {
      imageUrl: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      title: 'Mountain Retreat',
      description: 'Find peace in natural sanctuaries', 
      price: 200
    },
  ]
}
