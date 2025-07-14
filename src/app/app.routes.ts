import { Routes } from '@angular/router';
import {Home} from './_pages/home/home';
import {Clients} from './_pages/clients/clients';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'clientes',
    component: Clients
  }


];
