import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";
import {ContentLayoutComponent} from "./layout/content-layout/content-layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/stats',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    component: ContentLayoutComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'stats',
    component: ContentLayoutComponent,
    loadChildren: () => import('./modules/stats/stats.module').then(m => m.StatsModule)
  },
  // Fallback when no prior routes is matched
  {path: '**', redirectTo: '/auth/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
