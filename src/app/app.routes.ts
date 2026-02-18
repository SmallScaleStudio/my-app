import { Routes } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { AboutComponent } from './comps/about/about.component';
import { HomeComponent } from './comps/home/home.component';
import { UserInteractionComponent } from './comps/user-interaction/user-interaction.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent,
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'interaction',
        component: UserInteractionComponent
    }

];


