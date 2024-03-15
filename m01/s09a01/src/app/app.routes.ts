import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [{
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];