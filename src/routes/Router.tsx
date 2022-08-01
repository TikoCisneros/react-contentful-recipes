import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import RecipeDetail from "../pages/RecipeDetail";
import Recipes from "../pages/Recipes";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Recipes />} />
          <Route path="recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
