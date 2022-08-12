import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { UpdateShoppingListComponent } from './update-shopping-list/update-shopping-list.component';
import { HomeComponent } from './home/home.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryHomeComponent } from './category-home/category-home.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"update/:id", component:UpdateShoppingListComponent},
  {path: "categories", component:CategoryHomeComponent},
  {path:"catupdate/:id", component:CategoryUpdateComponent},
  { path: "", redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
