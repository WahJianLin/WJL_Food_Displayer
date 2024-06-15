import React from "react";
import { IRecipe, IRecipeData } from "../supplimentary/recipe-interfaces";
import RecipeSection from "./recipe-section";

async function FoodDisplayer(props: Props) {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/random?apiKey="
  );
  const recipesDate: IRecipeData = await response.json();
  return (
    <div>
      <div className="drawer lg:drawer-open bg-blue-300">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <RecipeSection recipe={recipesDate.recipes[0]} />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-gray-700 text-white">
            <div>sidebar</div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Props {}

export default FoodDisplayer;
