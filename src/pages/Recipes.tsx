// Check https://javascript.plainenglish.io/how-to-pass-data-between-pages-in-react-router-dom-v6-e2f95afb7cdf
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_RECIPES } from "../api/recipes";
import RecipeCard from "../components/RecipeCard";
import Spinner from '../components/Spinner';
import { RecipeCollectionData } from "../models/recipes";

const Recipes = () => {
  const navigate = useNavigate();

  const { loading, error, data } = useQuery<RecipeCollectionData>(GET_RECIPES);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const handleNavigateToDetail = (recipeId: string) => () =>
    navigate(`/recipe/${recipeId}`);

  if (!data) return <p>No items</p>;

  const {
    recipeCollection: { items: recipes },
  } = data;

  return (
    <main className="flex flex-wrap justify-around">
      {recipes.map((recipe) => {
        const {
          sys: { id },
        } = recipe;

        return (
          <RecipeCard
            key={id}
            data={recipe}
            onClick={handleNavigateToDetail(id)}
          />
        );
      })}
    </main>
  );
};

export default Recipes;
