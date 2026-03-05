import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,              // make sure this is standalone if using imports
  imports: [CommonModule]        // add this
})
export class HomeComponent {
  courseCode: string = 'APPDEV1';
  welcomeMsg: string = 'Welcome to your Angular journey!';
  description: string = 'Learn Angular with practical exercises and projects.';
  units: number = 3;
  isActive: boolean = true;
  stat: string = 'Ongoing';
  courseImageUrl = '/karenina.gif';
  isHighlighted: boolean = true; 
}