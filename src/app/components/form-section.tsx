"use client";
import React, { useState } from "react";
import {
  ANIMAL_PRODUCT_USAGE_NAME,
  ANIMAL_PRODUCT_USAGE_VALUE,
  FORM_DESCRIPTION,
  FORM_TITLE,
  ANIMAL_USAGE_LABEL,
  DAIRY_FREE_LABEL,
  EXCLUDE_FOODS_LABEL,
  FIND_RANDOM_RECIPE_LABEL,
  FOOD_TYPE_LABEL,
  FOOD_TYPE_DESCRIPTION_LABEL,
  GLUTEN_FREE_LABEL,
  INCLUDE_FOODS_LABEL,
  MEAL_TIME_LABEL,
  MEAL_TIME_NAME,
  MEAL_TIME_VALUE,
  OVERLAP_MESSAGE,
} from "../supplimentary/constants";
import { IFormDetails } from "../supplimentary/form-interfaces";
import Dropdown from "./form/dropdown";
import Checkbox from "./form/checkbox";
import TextInput from "./form/text-input";
import TextArea from "./form/text-area";

function FormSection(props: IFormSectionProps) {
  const [state, setState] = useState<IFormSectionState>({
    checkboxes:{
      glutenFreeState: false,
      dairyFreeState: false,
    },
    dropdowns:{
      animalProductUsageState: ANIMAL_PRODUCT_USAGE_VALUE.STANDARD,
      mealTimeState: MEAL_TIME_VALUE.ALL,
    },
    textInputs:{
      foodTypeState: "",
      excludeFoodsState: "",
      includeFoodsState: "",
    }
  });

  const handleCheckboxClick = (id: string) => {
    setState((prevState) => ({
      ...prevState,
      checkboxes: {
        ...prevState.checkboxes,
        [id]: !prevState.checkboxes[id], // Toggle the state of the clicked checkbox
      },
    }));
  };

  const [animalProductUsageState, setAnimalProductUsageState] =
    useState<ANIMAL_PRODUCT_USAGE_VALUE>(ANIMAL_PRODUCT_USAGE_VALUE.STANDARD);
  const [glutenFreeState, setGlutenFreeState] = useState<boolean>(false);
  const [dairyFreeState, setDairyFreeState] = useState<boolean>(false);
  const [mealTimeState, setMealTimeState] = useState<MEAL_TIME_VALUE>(
    MEAL_TIME_VALUE.ALL
  );
  const [foodTypeState, setFoodTypeState] = useState<string>("");
  const [excludeFoodsState, setExcludeFoodsState] = useState<string>("");
  const [includeFoodsState, setIncludeFoodsState] = useState<string>("");
  // Move below form fields to seperate components as this is hard to read

  const includeExcludeOverlap = (
    includeList: string[],
    excludeList: string[]
  ): boolean => {
    if (includeList[0] === "" || excludeList[0] === "") {
      return false;
    }
    return includeList.some((target: string) => excludeList.includes(target));
  };
  const onDropdownChange = (value: ANIMAL_PRODUCT_USAGE_VALUE) => {
    setAnimalProductUsageState(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDetailsIncludes: string[] = includeFoodsState
      .replaceAll(" ", "")
      .split(",");
    const formDetailsExcludes: string[] = excludeFoodsState
      .replaceAll(" ", "")
      .split(",");
    if (
      (formDetailsIncludes.length > 0 || formDetailsExcludes.length > 0) &&
      includeExcludeOverlap(formDetailsIncludes, formDetailsExcludes)
    ) {
      alert(OVERLAP_MESSAGE);
    } else {
      const formDetails: IFormDetails = {
        animalProductUsage: animalProductUsageState,
        glutenFree: glutenFreeState,
        dairyFree: dairyFreeState,
        mealTime: mealTimeState,
        foodType: foodTypeState,
        excludeFoods: excludeFoodsState,
        includeFoods: includeFoodsState,
      };
      props.fetchRecipe(formDetails);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <h1 className="text-2xl">{FORM_TITLE}</h1>
          <p>{FORM_DESCRIPTION}</p>
          <label className="label cursor-pointer">
            <span className="label-text">{ANIMAL_USAGE_LABEL}</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) =>
              setAnimalProductUsageState(
                e.target.value as ANIMAL_PRODUCT_USAGE_VALUE
              )
            }
          >
            <option value={ANIMAL_PRODUCT_USAGE_VALUE.STANDARD}>
              {ANIMAL_PRODUCT_USAGE_NAME.STANDARD}
            </option>
            <option value={ANIMAL_PRODUCT_USAGE_VALUE.VEGETARIAN}>
              {ANIMAL_PRODUCT_USAGE_NAME.VEGETARIAN}
            </option>
            <option value={ANIMAL_PRODUCT_USAGE_VALUE.VEGAN}>
              {ANIMAL_PRODUCT_USAGE_NAME.VEGAN}
            </option>
          </select>
          <Checkbox name={GLUTEN_FREE_LABEL} checked={glutenFreeState} onChange={handleCheckboxClick}/>
          <Checkbox name={DAIRY_FREE_LABEL} checked={dairyFreeState} onChange={handleCheckboxClick}/>
          <div>
            <label className="label cursor-pointer">
              <span className="label-text">{GLUTEN_FREE_LABEL}</span>
              <input
                type="checkbox"
                checked={glutenFreeState}
                onChange={() => setGlutenFreeState(!glutenFreeState)}
                className="text-red-600"
              />
            </label>
          </div>
          <div className="pb-4">
            <label className="label cursor-pointer">
              <span className="label-text">{DAIRY_FREE_LABEL}</span>
              <input
                type="checkbox"
                checked={dairyFreeState}
                onChange={() => setDairyFreeState(!dairyFreeState)}
                className="text-green-600"
              />
            </label>
          </div>
          <label className="label cursor-pointer">
            <span className="label-text">{MEAL_TIME_LABEL}</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(event) =>
              setMealTimeState(event.target.value as MEAL_TIME_VALUE)
            }
          >
            <option>{MEAL_TIME_NAME.ALL}</option>
            <option>{MEAL_TIME_NAME.BREAKFAST}</option>
            <option>{MEAL_TIME_NAME.LUNCH}</option>
            <option>{MEAL_TIME_NAME.DINNER}</option>
            <option>{MEAL_TIME_NAME.SNACK}</option>
            <option>{MEAL_TIME_NAME.DESSERT}</option>
          </select>
          {/* <TextInput label={FOOD_TYPE_LABEL} placeholder="Pasta, Sandwich, etc." /> */}
          <label className="w-full max-w-xs pb-4">
            <div className="label">
              <span className="label-text">{FOOD_TYPE_LABEL}</span>
              <span className="label-text-alt">
                {FOOD_TYPE_DESCRIPTION_LABEL}
              </span>
            </div>
            <input
              type="text"
              placeholder="Pasta, Sandwich, etc."
              className="input input-bordered w-full max-w-xs"
              onChange={(event) => setFoodTypeState(event.target.value)}
            />
          </label>
          <TextArea label={INCLUDE_FOODS_LABEL} placeholder="Include Foods" />
          <label className="pb-4">
            <div className="label">
              <span className="label-text">{INCLUDE_FOODS_LABEL}</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Include Foods"
              onChange={(event) => setIncludeFoodsState(event.target.value)}
            ></textarea>
          </label>
          <label className="pb-4">
            <div className="label">
              <span className="label-text">{EXCLUDE_FOODS_LABEL}</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Exclude Foods"
              onChange={(event) => setExcludeFoodsState(event.target.value)}
            />
          </label>
          <button className="btn" type="submit">
            {FIND_RANDOM_RECIPE_LABEL}
          </button>
        </div>
      </form>
    </div>
  );
}

interface IFormSectionProps {
  fetchRecipe: (formDetails: IFormDetails) => Promise<void>;
}

interface IFormSectionState {
  readonly checkboxes: { [key: string]: boolean };
  readonly dropdowns: {[key: string]: ANIMAL_PRODUCT_USAGE_VALUE | MEAL_TIME_VALUE }
  readonly textInputs: {[key: string]: string }
}

export default FormSection;
