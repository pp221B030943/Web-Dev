import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { category } from '../category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories = category;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
  }
}

// import { Component } from '@angular/core';
// import { Products } from '../products';
// import { category } from '../category';

// @Component({
//   selector: 'app-category',
//   templateUrl: './category.component.html',
//   styleUrls: ['./category.component.css']
// })
// export class CategoryComponent {
//   categories = category;

//   constructor() {
//   }
// }