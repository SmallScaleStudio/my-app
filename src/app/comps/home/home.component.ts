import { Component } from '@angular/core';
import { UserInteractionComponent } from "../user-interaction/user-interaction.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [UserInteractionComponent]
})
export class HomeComponent {
  courseCode: string = 'APPDEV1';
  welcomeMsg: string = 'Welcome to your Angular journey!';
  description: string = 'Learn Angular with practical exercises and projects.';
  units: number = 3;
  isActive: boolean = true;
  stat: string = 'Ongoing';

  userImageUrl = '/karenina.gif';
  isHighlighted: boolean = true; 
}
