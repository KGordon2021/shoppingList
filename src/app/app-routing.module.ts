import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { UpdateShoppingListComponent } from './update-shopping-list/update-shopping-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"update/:id", component:UpdateShoppingListComponent},
  { path: "", redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
