import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'card',
    component: CardComponent
  }
];