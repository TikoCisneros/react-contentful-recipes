import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetail from "../pages/RecipeDetail";
import Recipes from "../pages/Recipes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Recipes />} />
        <Route path="recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
