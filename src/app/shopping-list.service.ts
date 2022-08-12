import { Observable, of, catchError, map, tap} from 'rxjs';
import { Injectable } from '@angular/core';
import { shoppingItemModel } from './models/shoppingItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor( private http: HttpClient) { }

  private rest_api = "http://localhost:3000/api";
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
}
