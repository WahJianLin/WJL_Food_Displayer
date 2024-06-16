"use client";
import React, { useState } from "react";
import { IRecipe, IRecipeData } from "../supplimentary/recipe-interfaces";
import FormSection from "./form-section";
import RecipeSection from "./recipe-section";

function FoodDisplayer(props: IFoodDisplayerProps) {
  const [state, setState] = useState<IFoodDisplayerState>({ recipe: null });
  const fetchRecipe = async (): Promise<void> => {
    try {
      const recipeData: IRecipeData = await (
        await fetch(
          "https://api.spoonacular.com/recipes/random?apiKey="
        )
      ).json();
      const recipe: IRecipe = recipeData.recipes[0];
      setState({ recipe });
      console.log(recipeData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="drawer lg:drawer-open bg-blue-300">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {state.recipe !== null ? (
            <RecipeSection recipe={state.recipe} />
          ) : null}
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
            <FormSection fetchRecipe={fetchRecipe} />
            {/* <RecipeButton fetchRecipe={fetchRecipe} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

interface IFoodDisplayerProps {}
interface IFoodDisplayerState {
  readonly recipe: IRecipe | null;
}

export default FoodDisplayer;
