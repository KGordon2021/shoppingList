import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { shoppingItemModel } from '../models/shoppingItem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-shopping-list',
  templateUrl: './update-shopping-list.component.html',
  styleUrls: ['./update-shopping-list.component.css']
})
export class UpdateShoppingListComponent implements OnInit {

  @Input()selectedItem!: shoppingItemModel;
  constructor(private router: ActivatedRoute,
              private location: Location,
              private service: ShoppingListService) { }

  ngOnInit(): void {
    this.getItemByParam();
  }

  getItemByParam():void{
    const id =  this.router.snapshot.paramMap.get('id');
    this.service.getById(id).subscribe( item => this.selectedItem = item)
  }

  goBack():void {
    this.location.back();
  }

  updateItem():void {
    this.service.updateById(this.selectedItem).subscribe (()=>this.goBack())
  }
}
