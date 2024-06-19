"use client";
import React, { useState } from "react";
import { ANIMAL_PRODUCT_USAGE, MEAL_TIME } from "../supplimentary/constants";
import { IFormDetails } from "../supplimentary/form-interfaces";

function FormSection(props: IFormSectionProps) {
  const [animalProductUsageState, setAnimalProductUsageState] =
    useState<ANIMAL_PRODUCT_USAGE>(ANIMAL_PRODUCT_USAGE.STANDARD);
  const [glutenFreeState, setGlutenFreeState] = useState<boolean>(false);
  const [dairyFreeState, setDairyFreeState] = useState<boolean>(false);
  const [mealTimeState, setMealTimeState] = useState<MEAL_TIME>(
    MEAL_TIME.BREAKFAST
  );
  const [foodTypeState, setFoodTypeState] = useState<string>("");
  const [excludeFoodsState, setExcludeFoodsState] = useState<string>("");
  const [includeFoodsState, setIncludeFoodsState] = useState<string>("");
  // Move below form fields to seperate components as this is hard to read

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <h1 className="text-2xl">Form Section</h1>
          <p>Fill out below to find a random recipe</p>
          <label className="label cursor-pointer">
            <span className="label-text">Animal Product Usage</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) =>
              setAnimalProductUsageState(e.target.value as ANIMAL_PRODUCT_USAGE)
            }
          >
            <option value={ANIMAL_PRODUCT_USAGE.STANDARD}>Standard</option>
            <option value={ANIMAL_PRODUCT_USAGE.VEGETARIAN}>Vegitarian</option>
            <option value={ANIMAL_PRODUCT_USAGE.VEGAN}>Vegan</option>
          </select>
          <div>
            <label className="label cursor-pointer">
              <span className="label-text">Gluten Free</span>
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
              <span className="label-text">Dairy Free</span>
              <input
                type="checkbox"
                checked={dairyFreeState}
                onChange={() => setDairyFreeState(!dairyFreeState)}
                className="text-green-600"
              />
            </label>
          </div>
          <label className="label cursor-pointer">
            <span className="label-text">Meal Time</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(event) =>
              setMealTimeState(event.target.value as MEAL_TIME)
            }
          >
            <option>All</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
            <option>Dessert</option>
          </select>
          <label className="w-full max-w-xs pb-4">
            <div className="label">
              <span className="label-text">What Type of Food</span>
              <span className="label-text-alt">Leave blank for all</span>
            </div>
            <input
              type="text"
              placeholder="Pasta, Sandwich, etc."
              className="input input-bordered w-full max-w-xs"
              onChange={(event) => setFoodTypeState(event.target.value)}
            />
          </label>
          <label className="pb-4">
            <div className="label">
              <span className="label-text">Foods to Exclude</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Exclude Foods"
              onChange={(event) => setExcludeFoodsState(event.target.value)}
            />
          </label>
          <label className="pb-4">
            <div className="label">
              <span className="label-text">Foods to Include</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Include Foods"
              onChange={(event) => setIncludeFoodsState(event.target.value)}
            ></textarea>
          </label>
          <button className="btn" type="submit">
            Find Random Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

interface IFormSectionProps {
  fetchRecipe: (formDetails: IFormDetails) => Promise<void>;
}

export default FormSection;
