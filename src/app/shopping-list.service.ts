import { Observable, of, catchError, map, tap} from 'rxjs';
import { Injectable } from '@angular/core';
import { shoppingItemModel, categoryModel } from './models/shoppingItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor( private http: HttpClient) { }

  private rest_api = "http://localhost:3000/api";
  private rest_api2 = "http://localhost:3000/category";
  private httpHeader = {headers: ({
    'Content-type': 'application/json'
  })}

  getShoppingList(): Observable<shoppingItemModel[]> {
    return this.http.get<shoppingItemModel[]>(`${this.rest_api}`).pipe (
      tap(retrieveditems => console.log(`retrieveditems = ${JSON.stringify(retrieveditems)}`)),
      catchError(error => of([]))
    )
  }

  getById(id: any): Observable<shoppingItemModel> {
    return this.http.get<shoppingItemModel>(`${this.rest_api}/findSelectedItem/${id}`).pipe (
      tap(selecteditems => console.log(`selecteditems = ${JSON.stringify(selecteditems)}`)),
      catchError(error => of(new shoppingItemModel()))
    )
  }


  addItem(item: shoppingItemModel): Observable<shoppingItemModel> {
    return this.http.post<shoppingItemModel>(`${this.rest_api}/add`, item, this.httpHeader).pipe (
      tap(addeditem => console.log(`addeditem = ${JSON.stringify(addeditem)}`)),
      catchError(error => of(new shoppingItemModel()))
    )
  }

  updateById(item: any): Observable<shoppingItemModel> {
    return this.http.put<shoppingItemModel>(`${this.rest_api}/updateById/${item._id}`, item, this.httpHeader).pipe (
      tap(editedItem => {
        alert(editedItem.item + " has been updated to the shopping List")
        console.log(`editedItem = ${JSON.stringify(editedItem)}`)}),
      catchError(error => of(new shoppingItemModel()))
    )
  }
  deleteItem(id: any): Observable<shoppingItemModel> {
    // alert("The Movie " + this.deleteMovie.name + " has been removed");
    return this.http.delete<shoppingItemModel>(`${this.rest_api}/remove/${id}`, this.httpHeader).pipe(
      tap( deletedItem => {
        alert(deletedItem.item + " has been removed from shopping List")
        console.log(`deletedItem = ${JSON.stringify(deletedItem)}`)
      }), //if retrieval is successful
      // catchError(error => of(new Movie())), //if there is an error
    ) ;
  }

  //category crud
  getCategoryList(): Observable<categoryModel[]> {
    return this.http.get<categoryModel[]>(`${this.rest_api2}/getCategory`).pipe (
      tap(retrievedcategories => console.log(`retrievedcategories = ${JSON.stringify(retrievedcategories)}`)),
      catchError(error => of([]))
    )
  }

  geCatById(id: any): Observable<categoryModel> {
    return this.http.get<categoryModel>(`${this.rest_api2}/findSelectedCategory/${id}`).pipe (
      tap(selectedCategory => console.log(`selectedCategory = ${JSON.stringify(selectedCategory)}`)),
      catchError(error => of(new categoryModel()))
    )
  }


  addCategory(category: categoryModel): Observable<categoryModel> {
    return this.http.post<categoryModel>(`${this.rest_api2}/addCategory`, category, this.httpHeader).pipe (
      tap(addedcategory => {
        // alert(addedcategory.category + " has been added to the category List")
        console.log(`addedcategory = ${JSON.stringify(addedcategory)}`)}),
      catchError(error => of(new categoryModel()))
    )
  }

  updateCatById(category: any): Observable<categoryModel> {
    return this.http.put<categoryModel>(`${this.rest_api2}/updateCatById/${category._id}`, category, this.httpHeader).pipe (
      tap(editedcategory => {
        console.log(`editedcategory = ${JSON.stringify(editedcategory)}`)}),
      catchError(error => of(new categoryModel()))
    )
  }
  deletecategory(id: any): Observable<categoryModel> {
    // alert("The Movie " + this.deleteMovie.name + " has been removed");
    return this.http.delete<categoryModel>(`${this.rest_api2}/removeCat/${id}`, this.httpHeader).pipe(
      tap( deletedcat => {
        console.log(`deletedcat = ${JSON.stringify(deletedcat)}`)
      }), //if retrieval is successful
      // catchError(error => of(new Movie())), //if there is an error
    ) ;
  }

}
