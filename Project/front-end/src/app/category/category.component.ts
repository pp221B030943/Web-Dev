import { Component } from '@angular/core';
import { category } from '../category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories = category;

  constructor() { }


  ngOnInit(): void {
  }

}
