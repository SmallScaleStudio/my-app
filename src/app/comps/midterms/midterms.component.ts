import { Component } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';
import { CommonModule } from '@angular/common';
import { InterpolationDataBindingComponent } from "../interpolation-data-binding/interpolation-data-binding.component";
import { ProductsComponent } from "../../products/products.component";

@Component({
  selector: 'app-midterms',
  templateUrl: './midterms.component.html',
  styleUrls: ['./midterms.component.css'],
  standalone: true,
  imports: [CommonModule, CalculatorComponent, InterpolationDataBindingComponent, ProductsComponent]

})
export class MidtermsComponent {
  activeTab: 'activities' | 'practice' = 'activities';
}