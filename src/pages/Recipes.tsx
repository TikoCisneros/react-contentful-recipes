// Check https://javascript.plainenglish.io/how-to-pass-data-between-pages-in-react-router-dom-v6-e2f95afb7cdf
//@ts-nocheck
import { useQuery } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import { GET_RECIPES } from "../api/recipes";

const Recipes = () => {
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_RECIPES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const handleNavigateToDetail = (recipeId: string) => () => navigate(`/recipe/${recipeId}`)

  return data.recipeCollection.items.map(({ title, sys: { id } }) => (
    <div key={id} className="mb-2">
      <span className="text-base">{title}</span>
      <button className="p-2 bg-orange-500" onClick={handleNavigateToDetail(id)}>Open</button>
    </div>
  ));
};

export default Recipes;
