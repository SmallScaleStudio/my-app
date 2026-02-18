import { Component } from '@angular/core';
import { LoginComponent } from './comps/login/login.component';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './comps/navi/navi.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  imports: [NaviComponent, LoginComponent, RouterOutlet]  
})
export class AppComponent {
  title = 'my-app';
}
