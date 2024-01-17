import { Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: 'advertissement',
    loadChildren: () => import('./advertissement/advertissement.module').then((m) => m.AdvertissementModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./business/business.module').then((m) => m.BusinessModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then((m) => m.CategoriesModule )
  },
  { path:'**', component: NotfoundComponent},
  {
    path: 'superadmin',
    loadChildren: () => import('./superadmin/superadmin.module').then((m) => m.SuperadminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
];
