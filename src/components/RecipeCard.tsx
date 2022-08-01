import { RecipeCollection } from "../models/recipes";
import { IoIosTimer } from "react-icons/io";

type RecipeCardProps = {
  data: RecipeCollection;
  onClick?: () => void;
};

const RecipeCard = ({ data, onClick }: RecipeCardProps) => {
  const {
    title,
    category,
    preparationTime,
    sys: { id },
    thumbnail: { url },
  } = data;

  return (
    <div
      className="flex flex-col min-w-[20rem] w-full max-w-[25rem] m-2 bg-white rounded-lg border border-gray-200 shadow-md cursor-pointer hover:scale-105 hover:shadow-orange-500/50"
      onClick={onClick}
    >
      <img
        className="rounded-t-lg w-full h-64 object-cover"
        src={url}
        alt={`img-th-${id}`}
      />
      <div className="flex flex-col flex-1 p-4 pb-0">
        <h6 className="mb-1 text-orange-600 font-extrabold uppercase">
          {category[0]}
        </h6>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>
      <span className="flex items-center justify-end text-gray-600 p-4 pt-0">
        <IoIosTimer className="mr-1 text-cyan-700 text-2xl" />
        {preparationTime} min.
      </span>
    </div>
  );
};

export default RecipeCard;
