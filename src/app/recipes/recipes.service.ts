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
    {
      id: '123456789NasiTomato',
      title: 'Nasi Tomato',
      imageUrl: 'assets/recipes/nasi-tomato.jpg',
      ingredient: [
        'basmati rice',
        'chicken',
        'coconut oil',
        'tomato paste',
        'coconut milk',
        'tomatoes',
        'cinnamon stick',
        'star anise',
        'cloves',
        'cardamom',
        'pandan leaves',
        'onion',
        'garlic',
        'mushroom/garlic powder',
        'sugar',
        'salt'
      ],
    },
    {
      id: '123456789Lasagna',
      title: 'Baked Lasagna',
      imageUrl: 'assets/recipes/lasagna.jpg',
      ingredient: [
        'lasagna noodles',
        'mozzarella cheese',
        'parmesan cheese',
        'lean ground beef',
        'onion',
        'garlic',
        'Tomato pasta sauce',
        'Italian seasoning',
        'ricotta cheese',
        'parsley'
      ],
    },
    {
      id: '123456789FettuccineAlfredo',
      title: 'Fettuccine Alfredo',
      imageUrl: 'assets/recipes/fettuccine-alfredo.jpg',
      ingredient: [
        'Fettuccine Pasta',
        'Butter',
        'Garlic',
        'Heavy Cream',
        'Salt',
        'Shredded Parmesan Cheese',
        'Pepper',
        'Parsley'
      ],
    },
    {
      id: '123456789NasiGorengKG',
      title: 'Nasi Goreng Kampung',
      imageUrl: 'assets/recipes/nasi-goreng-kg.jpg',
      ingredient: [
        'onion',
        'shallot',
        'garlic',
        'birds eye chilli',
        'dried anchovies',
        'cooking oil',
        'long beans',
        'water convolvulus',
        'cooked rice',
        'eggs',
        'salt'
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
