import { IoIosTimer } from "react-icons/io";
import { RecipeDetail } from "../../models/recipes";
import Preparation from "./Preparation";

type RecipeInfoProps = {
  data: RecipeDetail;
};

const RecipeInfo = ({ data }: RecipeInfoProps) => {
  const {
    title,
    category,
    ingredients,
    preparationTime,
    preparation: {
      json: { content },
    },
    photo: { url },
  } = data;

  return (
    <main className="p-8 bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="flex flex-col md:flex-row md:space-x-14">
        <img
          className="hidden md:inline-block h-[50vh] lg:h-[65vh]"
          src={url}
          alt="recipe-img"
        />
        <section className="flex flex-col flex-1">
          <h1 className="mb-2 text-5xl font-extrabold tracking-tight text-red-700">
            {title}
          </h1>
          <h2 className="text-2xl font-bold text-orange-700 my-2">
            {category[0]}
          </h2>
          <p className="flex justify-end items-center text-2xl text-gray-600 italic my-2">
            <IoIosTimer className="mr-1 text-cyan-700 text-4xl" />
            <h5 className="font-semibold">Prep time:&nbsp;</h5>
            {preparationTime} min.
          </p>
          <img
            className="inline-block md:hidden h-[50vh] object-contain mt-2 mb-6"
            src={url}
            alt="recipe-img-responsive"
          />
          <h3 className="text-2xl font-semibold text-slate-700">
            Ingredients:
          </h3>
          <ul className="list-disc pl-6 text-lg text-slate-600">
            {ingredients.map((ingredient, index) => (
              <li key={`i-${index}`}>{ingredient}</li>
            ))}
          </ul>
        </section>
      </div>
      <Preparation data={content} />
    </main>
  );
};

export default RecipeInfo;
