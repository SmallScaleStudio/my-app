import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 45000, stock: 5, status: 'Available', description: 'High performance laptop' },
    { id: 2, name: 'Mouse', category: 'Electronics', price: 500, stock: 15, status: 'Available', description: 'Wireless mouse' },
    { id: 3, name: 'Desk Chair', category: 'Furniture', price: 3500, stock: 7, status: 'Limited', description: 'Ergonomic chair' },
    { id: 4, name: 'Notebook', category: 'Stationery', price: 50, stock: 50, status: 'Available', description: 'College ruled notebook' },
    { id: 5, name: 'Pen', category: 'Stationery', price: 20, stock: 100, status: 'Available', description: 'Blue ink pen' },
    { id: 6, name: 'Smartphone', category: 'Electronics', price: 25000, stock: 10, status: 'Available', description: 'Latest model smartphone' },
    { id: 7, name: 'Headphones', category: 'Electronics', price: 1500, stock: 20, status: 'Available', description: 'Noise-cancelling headphones' },
    { id: 8, name: 'Desk Lamp', category: 'Furniture', price: 800, stock: 12, status: 'Limited', description: 'LED desk lamp' },
    { id: 9, name: 'Backpack', category: 'Accessories', price: 1200, stock: 8, status: 'Available', description: 'Durable travel backpack' },
    { id: 10, name: 'Water Bottle', category: 'Accessories', price: 300, stock: 30, status: 'Available', description: '500ml stainless steel bottle' }
  ];

  selectedProduct?: any;
  showModal = false;

  viewProductDetails(product: any) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}