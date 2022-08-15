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
    private formBuilder: FormBuilder,
    private routes: Router,
    private location: Location) {

    this.categoryList = formBuilder.group ({
    categories: ['', Validators.required],

    })
  }

  ngOnInit(): void {
    this.getCategories();
  }

  addcategory() {
    this.service.addCategory(this.categoryList.value).subscribe((data: any)=> {
      alert(data.categories + " has been added to your Category List!");
      this.catList.push(data);
      this.routes.navigate(['categories'])
    })
  }


  getCategories():void {
    this.service.getCategoryList().subscribe(
      (res) => {
        this.catList = res;
      })
  }


  goBack():void {
    this.location.back();
  }

  remove(category: any) {
    console.log(`${JSON.stringify(category._id)}`)
    this.service.deletecategory(category._id).subscribe (
      (res) => {
        alert(category.categories + " has been removed from category List");
        this.catList = this.catList.filter((u:any) => u!== category)
        this.routes.navigate(['categories'])
      })
  }

}
