import { RichText } from './richText';

type Image = {
  url: string;
};

type SystemInfo = {
  id: string;
};

export type Category = "Dessert" | "Dinners" | "Vegetarian" | "Easy & healthy";

interface Recipe {
  title: string;
  category: Category[];
  preparationTime: number;
  thumbnail: Image;
  sys: SystemInfo;
  ingredients: string[];
  preparation: RichText;
  photo: Image;
}

export type RecipeCollection = Omit<Recipe, "ingredients" | "preparation" | "photo">;

export interface RecipeCollectionData {
  recipeCollection: {
    items: RecipeCollection[];
  };
}

export interface RecipeDetailVariables {
  id: string;
}

export type RecipeDetail = Omit<Recipe, "thumbnail" | "sys">;

export interface RecipeDetailData {
  recipe: RecipeDetail;
}
