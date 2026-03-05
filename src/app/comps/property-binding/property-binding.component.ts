import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent {
  isButtonDisabled: boolean = true; 
  imageSource: string = '/ub.png'; 
  imageAlt: string = 'SIT Logo';
  imageWidth: number = 80;

  linkUrl: string = 'https://www.ubaguio.edu/';
  inputPlaceholder: string = 'Type your name here...';

  clickCount: number = 0;

  onButtonClick(): void {
    this.clickCount++;
    this.isButtonDisabled = false; 
  }
}