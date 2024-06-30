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
  ERROR_MESSAGE_TEXT_FIELDS,
} from "../supplimentary/constants";
import InitialHero from "./intial-hero";
import Toast from "./basic/toast";

function FoodDisplayer() {
  const [state, setState] = useState<IFoodDisplayerState>({
    recipe: null,
    displayError: false,
    errorMsg: "",
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
        await fetch(`/api/random?${searchParams}`, { cache: "no-store" })
      ).json();
      setState((prevState) => ({
        ...prevState,
        recipe,
        displayError: false,
        errorMsg: "",
      }));
    } catch (err) {
      console.log(err);
      setState((prevState) => ({
        ...prevState,
        displayError: true,
        errorMsg: ERROR_MESSAGE_TEXT_FIELDS,
      }));
    }
  };

  const getRecipeSection = (): JSX.Element | null => {
    return state.recipe ? (
      <RecipeSection recipe={state.recipe} />
    ) : (
      <InitialHero />
    );
  };

  const errorToast = (): JSX.Element | null => {
    return state.displayError ? <Toast message={state.errorMsg} /> : null;
  };

  const triggerError = (errorMsg: string): void => {
    setState((prevState) => ({
      ...prevState,
      displayError: true,
      errorMsg,
    }));
  };

  return (
    <div className="h-screen">
      <div className="drawer lg:drawer-open bg-zinc-200 h-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start ml-4 ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden mt-4"
          >
            {OPEN_FORM_LABEL}
          </label>
          {getRecipeSection()}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-gray-700 text-white">
            <FormSection
              fetchRecipe={fetchRecipe}
              triggerError={triggerError}
            />
          </div>
        </div>
      </div>
      {errorToast()}
    </div>
  );
}

interface IFoodDisplayerState {
  readonly recipe: IRecipe | null;
  readonly displayError: boolean;
  readonly errorMsg: string;
}

export default FoodDisplayer;
