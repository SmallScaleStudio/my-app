import { Component } from '@angular/core';
import { NaviComponent } from './comps/navi/navi.component';
import { LoginComponent } from './comps/login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  // Corrected 'styleUrl' to 'styleUrls'
  imports: [NaviComponent, LoginComponent, RouterOutlet]  // Import both components
})
export class AppComponent {
  title = 'my-app';

 
}
