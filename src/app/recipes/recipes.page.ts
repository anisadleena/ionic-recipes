import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }
}
