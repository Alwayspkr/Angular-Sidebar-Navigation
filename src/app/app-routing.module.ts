import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'products', component: ProductsComponent },

  // Redirect empty path to 'home' (or any other default route)
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Wildcard route for a 404 page
  { path: '**', component: NotFoundComponent } // You need to create a NotFoundComponent
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
