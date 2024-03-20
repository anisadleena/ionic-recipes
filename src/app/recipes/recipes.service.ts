import { Injectable } from '@angular/core';
import { Recipe } from './recipe.type';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: '123456789NasiLemak',
      title: 'Nasi Lemak',
      imageUrl: 'assets/recipes/nasi-lemak.jpg',
      ingredient: [
        'Rice',
        'Screwpine Leaves',
        'Ginger',
        'Coconut milk',
        'salt',
        'Red Onion',
        'Garlic',
        'Anchovies',
        'Belacan',
        'Dried chilli',
      ],
    },
    {
      id: '123456789PudingCaramel',
      title: 'Caramel Pudding',
      imageUrl: 'assets/recipes/puding-caramel.jpg',
      ingredient: ['Eggs', 'Evaporated milk', 'salt', 'vanilla extract'],
    },
    {
      id: '123456789ChocolateCake',
      title: 'Chocolate Cake',
      imageUrl: 'assets/recipes/choco-cake.jpg',
      ingredient: [
        'all-purpose flour',
        'sugar',
        'unsweetened cocoa powder',
        'baking powder',
        'baking soda',
        'salt',
        'espresso powder',
        'milk',
        'oil',
        'eggs',
        'vanilla extract',
      ],
    },
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipeById(recipeId: any) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }
}
