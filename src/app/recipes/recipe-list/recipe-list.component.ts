import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
 
  recipes:Recipe[] =[
   new Recipe('Test Recipe 1','It is just test recipe 1.','data:image/jpeg;base64,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')
  ,new Recipe('Test Recipe 2','It is just test recipe 2.','data:image/jpeg;base64,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')
    ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipeEl:Recipe)
  {
    this.recipeWasSelected.emit(recipeEl);
  }
}
