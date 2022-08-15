import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shoppingList: any;
  itemsList: any[] = [];

  constructor(private service: ShoppingListService,
              private fb: FormBuilder,
              private routes: Router,
              private location: Location) {
    this.shoppingList = fb.group ({
      item: ['', Validators.required],
    })
   }

  ngOnInit(): void {
    this.getItems();
  }

  addItem() {
    this.service.addItem(this.shoppingList.value).subscribe((data: any)=> {
      alert(data.item + " has been added to your Shopping List!");
      this.itemsList.push(data)
      this.routes.navigate([''])
    })
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
    this.service.deleteItem(item._id).subscribe (
      () => {
        this.routes.navigate(['home']);
        this.itemsList = this.itemsList.filter((u:any) => u!== item)

      })
  }

}
