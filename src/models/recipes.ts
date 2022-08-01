type Image = {
  url: string;
};

type SystemInfo = {
  id: string;
};

export type Category = "Dessert" | "Dinners" | "Vegetarian" | "Easy & healthy";

export interface Recipe {
  title: string;
  category: Category[];
  preparationTime: number;
  thumbnail: Image;
  sys: SystemInfo;
  ingredients: string[];
  preparation: unknown;
  photo: Image;
}

type RecipeCollection = Omit<Recipe, "ingredients" | "preparation" | "photo">;

export interface RecipeCollectionData {
  recipeCollection: {
    items: RecipeCollection[];
  };
}

export interface RecipeDetailVariables {
  id: string;
}

type RecipeDetail = Omit<Recipe, "thumbnail" | "sys">;

export interface RecipeDetailData {
  recipe: RecipeDetail;
}
