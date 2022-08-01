import { useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { GET_RECIPE_BY_ID } from "../api/recipes";

const RecipeDetail = () => {
  const { id } = useParams();

  if (!id) return <p>Error ID param</p>;

  const { loading, error, data } = useQuery(GET_RECIPE_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return  <div>{JSON.stringify(data)}</div>;
};

export default RecipeDetail;
