import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courseCode: String = 'APPDEV!';
  description: String = 'I HAVE NO IDEA';
  units: number = 3;
  isActive: boolean = true
  stat:string='Active';
  welcomemsg: string = 'san mo ilalagay';

}
