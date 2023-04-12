import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HelloComponent } from './hello.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HelloComponent,
    title: 'Home Page',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'products Component',
  },
];
