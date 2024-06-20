"use client";
import React, { useState } from "react";
import { IRecipe } from "../supplimentary/recipe-interfaces";
import FormSection from "./form-section";
import RecipeSection from "./recipe-section";
import { IFormDetails } from "../supplimentary/form-interfaces";
import {
  ANIMAL_PRODUCT_USAGE_VALUE,
  OPEN_FORM_LABEL,
  MEAL_TIME_VALUE,
  GLUTEN_FREE_VALUE,
  DAIRY_FREE_VALUE,
} from "../supplimentary/constants";

function FoodDisplayer(props: IFoodDisplayerProps) {
  const [state, setState] = useState<IFoodDisplayerState>({
    recipe: null,
    foundRecipe: false,
  });

  const fetchRecipe = async (formDetails: IFormDetails): Promise<void> => {
    try {
      const includeTagsArray: string[] = [];
      const excludeTagsArray: string[] = [];
      if (
        formDetails.animalProductUsage !== ANIMAL_PRODUCT_USAGE_VALUE.STANDARD
      ) {
        includeTagsArray.push(formDetails.animalProductUsage);
      }
      if (formDetails.glutenFree) {
        includeTagsArray.push(GLUTEN_FREE_VALUE);
      }
      if (formDetails.dairyFree) {
        includeTagsArray.push(DAIRY_FREE_VALUE);
      }
      if (formDetails.mealTime !== MEAL_TIME_VALUE.ALL) {
        includeTagsArray.push(formDetails.mealTime);
      }
      if (formDetails.foodType !== "") {
        includeTagsArray.push(formDetails.foodType);
      }
      if (formDetails.includeFoods !== "") {
        includeTagsArray.push(formDetails.includeFoods);
      }

      if (formDetails.excludeFoods !== "") {
        excludeTagsArray.push(formDetails.excludeFoods);
      }

      const includeTags: string = includeTagsArray.join();
      const excludeTags: string = excludeTagsArray.join();
      const searchParams: string = `number=1${
        includeTags != "" ? `&include-tags=${includeTags}` : ""
      }${excludeTags != "" ? `&exclude-tags=${excludeTags}` : ""}`;

      const recipe: IRecipe = await (
        await fetch(`/api/random?${searchParams}`)
      ).json();
      console.log("success", recipe);
      setState({ recipe, foundRecipe: true });
    } catch (err) {
      console.log(err);

      console.log("failure", err);
      setState((prevState) => ({
        ...prevState,
        foundRecipe: false,
      }));
    }
  };

  const getRecipeSection = () => {
    return state.recipe !== null ? (
      <RecipeSection recipe={state.recipe} />
    ) : null;
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
            {OPEN_FORM_LABEL}
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-gray-700 text-gray-300">
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
