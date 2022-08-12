import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewShoppingListComponent } from './view-shopping-list/view-shopping-list.component';
import { UpdateShoppingListComponent } from './update-shopping-list/update-shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewShoppingListComponent,
    UpdateShoppingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
