import { shoppingItemModel } from './../models/shoppingItem';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-shopping-list',
  templateUrl: './view-shopping-list.component.html',
  styleUrls: ['./view-shopping-list.component.css']
})
export class ViewShoppingListComponent implements OnInit {

itemsList: any[] = [];

  constructor(private service: ShoppingListService, private location: Location) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems():void {
    this.service.getShoppingList().subscribe(
      (res) => {
        this.itemsList = res;
        console.log(`this.itemsList is ${JSON.stringify(this.itemsList)}`)
      })
  }


  goBack():void {
    this.location.back();
  }

  remove(item: any) {
    this.service.deleteItem(item._id).subscribe ( () => this.goBack())
  }
}
