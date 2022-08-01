import { gql } from "@apollo/client";

export const GET_RECIPES = gql`
  query GetRecipes {
    recipeCollection {
      items {
        title
        category
        preparationTime
        thumbnail {
          url
        }
        sys {
          id
        }
      }
    }
  }
`;

export const GET_RECIPE_BY_ID = gql`
  query GetRecipeById($id: String!) {
    recipe(id: $id){
      title
      category
      preparationTime
      ingredients
      preparation {
        json
      }
      photo {
        url
      }
    }
  }
`;
