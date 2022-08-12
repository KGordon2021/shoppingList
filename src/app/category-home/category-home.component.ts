import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {

  categoryList: any;
  catList: any[] = [];

  constructor(private service: ShoppingListService,
    private fb: FormBuilder,
    private routes: Router,
    private location: Location) {

    this.categoryList = fb.group ({
    category: ['', Validators.required],

    })
  }

  ngOnInit(): void {
    this.getCategories();
  }

  addcategory() {
    this.service.addItem(this.categoryList.value).subscribe((data: any)=> {
      alert(data.item + " has been added to your Category List!");
      this.routes.navigate([''])
    })
  }


  getCategories():void {
    this.service.getCategoryList().subscribe(
      (res) => {
        this.catList = res;
        console.log(`this.categoryList is ${JSON.stringify(this.catList)}`)
      })
  }


  goBack():void {
    this.location.back();
  }

  remove(item: any) {
    this.service.deleteItem(item._id).subscribe ( () => this.goBack())
  }

}
