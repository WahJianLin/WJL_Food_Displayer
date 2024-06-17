"use client";
import React, { useState } from "react";
import { ANIMAL_PRODUCT_USAGE, MEAL_TIME } from "../supplimentary/constants";

function FormSection(props: IFormSectionProps) {
  const [formState, setFormState] = useState<IFormSectionState>({
    animalProductUsage: ANIMAL_PRODUCT_USAGE.STANDARD,
    glutenFree: true,
    dairyFree: true,
    mealTime: MEAL_TIME.BREAKFAST,
    foodType: "",
    excludeFoods: "",
    includeFoods: "",
  });
  return (
    <div>
      <div className="form-control">
        <h1 className="text-2xl">Form Section</h1>
        <p>Fill out below to find a random recipe</p>
        <label className="label cursor-pointer">
          <span className="label-text">Animal Product Usage</span>
        </label>
        <select className="select select-bordered w-full max-w-xs">
          <option>Standard</option>
          <option>Vegitarian</option>
          <option>Vegan</option>
        </select>
      </div>
      <div className="">
        <label className="label cursor-pointer">
          <span className="label-text">Gluten Free</span>
          <input type="checkbox" defaultChecked className="text-red-600" />
        </label>
      </div>
      <div className="pb-4">
        <label className="label cursor-pointer">
          <span className="label-text">Dairy Free</span>
          <input type="checkbox" defaultChecked className="text-green-600" />
        </label>
      </div>
      <label className="label cursor-pointer">
        <span className="label-text">Meal Time</span>
      </label>
      <select className="select select-bordered w-full max-w-xs">
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
        />
      </label>
      <label className="pb-4">
        <div className="label">
          <span className="label-text">Foods to Exclude</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Exclude Foods"
        ></textarea>
      </label>
      <label className="pb-4">
        <div className="label">
          <span className="label-text">Foods to Include</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Include Foods"
        ></textarea>
      </label>
      <button className="btn">submit</button>
      <button className="btn" onClick={props.fetchRecipe}>
        api call
      </button>
    </div>
  );
}

interface IFormSectionProps {
  fetchRecipe: () => Promise<void>;
}

interface IFormSectionState {
  readonly animalProductUsage: ANIMAL_PRODUCT_USAGE;
  readonly glutenFree: boolean;
  readonly dairyFree: boolean;
  readonly mealTime: MEAL_TIME;
  readonly foodType: string;
  readonly excludeFoods: string;
  readonly includeFoods: string;
}

export default FormSection;
