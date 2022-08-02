import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import RecipeDetail from "../pages/RecipeDetail";
import Recipes from "../pages/Recipes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Recipes />} />
          <Route path="recipe/:id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
