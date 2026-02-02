import { Component } from '@angular/core';
import { NaviComponent } from './comps/navi/navi.component';
import { LoginComponent } from './comps/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  // Corrected 'styleUrl' to 'styleUrls'
  imports: [NaviComponent, LoginComponent]  // Import both components
})
export class AppComponent {
  title = 'my-app';
}
