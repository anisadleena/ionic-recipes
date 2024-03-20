import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RecipeDetailsPage implements OnInit {
  loadedRecipe!: any;

  constructor(
    private activatedRouted: ActivatedRoute,
    private recipeService: RecipesService
  ) {}

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        return;
      }

      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipeById(recipeId);
      console.log('this.loadedRecipe : ', this.loadedRecipe);
    });
  }
}
