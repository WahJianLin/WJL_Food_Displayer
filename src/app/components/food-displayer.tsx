"use client";
import React, { useState } from "react";
import { IRecipe, IRecipeData } from "../supplimentary/recipe-interfaces";
import FormSection from "./form-section";
import RecipeSection from "./recipe-section";
import { IFormDetails } from "../supplimentary/form-interfaces";
import { ANIMAL_PRODUCT_USAGE, MEAL_TIME } from "../supplimentary/constants";

function FoodDisplayer(props: IFoodDisplayerProps) {
  const [state, setState] = useState<IFoodDisplayerState>({
    recipe: null,
    foundRecipe: false,
  });

  const fetchRecipe = async (formDetails: IFormDetails): Promise<void> => {
    try {
      //&includeTags=
      const includeTags = `${
        formDetails.animalProductUsage !== ANIMAL_PRODUCT_USAGE.STANDARD
          ? `${formDetails.animalProductUsage},`
          : ""
      }${formDetails.glutenFree ? "gluten free," : ""}${
        formDetails.dairyFree ? "dairy free," : ""
      }${
        formDetails.mealTime === MEAL_TIME.ALL ? `${formDetails.mealTime},` : ""
      }${formDetails.foodType !== "" ? `${formDetails.foodType},` : ""}${
        formDetails.includeFoods
      }`;

      //&excludeTags=
      const excludeTags = `${formDetails.excludeFoods}`;
      console.log(includeTags);
      const recipe: IRecipe = await (
        await fetch(
          `/api/random?${
            includeTags != "" ? `&include-tags=${includeTags}` : ""
          }${excludeTags != "" ? `&exclude-tags=${excludeTags}` : ""}`
        )
      ).json();
      setState({ recipe, foundRecipe: true });
    } catch (err) {
      console.log(err);
      setState((prevState) => ({
        ...prevState,
        foundRecipe: false,
      }));
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
          </div>
        </div>
      </div>
    </div>
  );
}

interface IFoodDisplayerProps {}
interface IFoodDisplayerState {
  readonly recipe: IRecipe | null;
  readonly foundRecipe: boolean;
}

export default FoodDisplayer;
