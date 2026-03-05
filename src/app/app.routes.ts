import { Routes } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { AboutComponent } from './comps/about/about.component';
import { HomeComponent } from './comps/home/home.component';
import { PrelimsComponent } from './comps/prelims/prelims.component';
import { MidtermsComponent } from './comps/midterms/midterms.component';
import { ProductsComponent } from './products/products.component';

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
        path:'prelims',
        component: PrelimsComponent
    },
    {
        path: 'midterms',
        component: MidtermsComponent
    },
    {
        path: 'product',
        component: ProductsComponent
    }

];


