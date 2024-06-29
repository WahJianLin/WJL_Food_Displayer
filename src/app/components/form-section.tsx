"use client";
import React, { useState } from "react";
import {
  ANIMAL_PRODUCT_USAGE_VALUE,
  FORM_DESCRIPTION,
  FORM_TITLE,
  DAIRY_FREE_LABEL,
  EXCLUDE_FOODS_LABEL,
  FIND_RANDOM_RECIPE_LABEL,
  FOOD_TYPE_LABEL,
  FOOD_TYPE_DESCRIPTION_LABEL,
  GLUTEN_FREE_LABEL,
  INCLUDE_FOODS_LABEL,
  MEAL_TIME_LABEL,
  MEAL_TIME_VALUE,
  OVERLAP_MESSAGE,
  GLUTEN_FREE_VALUE,
  DAIRY_FREE_VALUE,
  ANIMAL_USAGE_LABEL,
  FIELD_IDS,
  ANIMAL_PRODUCT_USAGE_RECORDS,
  MEAL_TIME_RECORDS,
} from "../supplimentary/constants";
import { IFormDetails } from "../supplimentary/form-interfaces";
import Dropdown from "./form/dropdown";
import Checkbox from "./form/checkbox";
import TextInput from "./form/text-input";

function FormSection(props: IFormSectionProps) {
  const [state, setState] = useState<IFormSectionState>({
    checkboxes: {
      [FIELD_IDS.GLUTEN_FREE]: false,
      [FIELD_IDS.DAIRY_FREE]: false,
    },
    dropdowns: {
      [FIELD_IDS.ANIMAL_PRODUCT_USAGE]: ANIMAL_PRODUCT_USAGE_VALUE.STANDARD,
      [FIELD_IDS.MEAL_TIME]: MEAL_TIME_VALUE.ALL,
    },
    textInputs: {
      [FIELD_IDS.FOOD_TYPE]: "",
      [FIELD_IDS.INCLUDE_FOODS]: "",
      [FIELD_IDS.EXCLUDE_FOODS]: "",
    },
  });

  const handleCheckboxClick = (id: FIELD_IDS) => {
    setState((prevState) => ({
      ...prevState,
      checkboxes: {
        ...prevState.checkboxes,
        [id]: !prevState.checkboxes[id],
      },
    }));
  };

  const handleDropdownChange = (
    id: FIELD_IDS,
    value: ANIMAL_PRODUCT_USAGE_VALUE | MEAL_TIME_VALUE
  ) => {
    setState((prevState) => ({
      ...prevState,
      dropdowns: {
        ...prevState.dropdowns,
        [id]: value,
      },
    }));
  };

  const handleTextInputChange = (id: FIELD_IDS, value: string) => {
    setState((prevState) => ({
      ...prevState,
      textInputs: {
        ...prevState.textInputs,
        [id]: value,
      },
    }));
  };

  const includeExcludeOverlap = (
    includeList: string[],
    excludeList: string[]
  ): boolean => {
    if (includeList[0] === "" || excludeList[0] === "") {
      return false;
    }
    return includeList.some((target: string) => excludeList.includes(target));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDetailsIncludes: string[] = state.textInputs[
      FIELD_IDS.INCLUDE_FOODS
    ]
      .replaceAll(" ", "")
      .split(",");
    const formDetailsExcludes: string[] = state.textInputs[
      FIELD_IDS.EXCLUDE_FOODS
    ]
      .replaceAll(" ", "")
      .split(",");

    if (
      (formDetailsIncludes.length > 0 || formDetailsExcludes.length > 0) &&
      includeExcludeOverlap(formDetailsIncludes, formDetailsExcludes)
    ) {
      alert(OVERLAP_MESSAGE);
    } else {
      const formDetails: IFormDetails = {
        animalProductUsage: state.dropdowns[
          FIELD_IDS.ANIMAL_PRODUCT_USAGE
        ] as ANIMAL_PRODUCT_USAGE_VALUE,
        glutenFree: state.checkboxes[FIELD_IDS.GLUTEN_FREE],
        dairyFree: state.checkboxes[FIELD_IDS.DAIRY_FREE],
        mealTime: state.dropdowns[FIELD_IDS.MEAL_TIME] as MEAL_TIME_VALUE,
        foodType: state.textInputs[FIELD_IDS.FOOD_TYPE],
        excludeFoods: state.textInputs[FIELD_IDS.EXCLUDE_FOODS],
        includeFoods: state.textInputs[FIELD_IDS.INCLUDE_FOODS],
      };
      props.fetchRecipe(formDetails);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-control gap-y-4">
          <h1 className="text-2xl">{FORM_TITLE}</h1>
          <p>{FORM_DESCRIPTION}</p>
          <Dropdown
            id={FIELD_IDS.ANIMAL_PRODUCT_USAGE}
            name={ANIMAL_USAGE_LABEL}
            options={ANIMAL_PRODUCT_USAGE_RECORDS}
            onChange={handleDropdownChange}
          />
          <Checkbox
            id={FIELD_IDS.GLUTEN_FREE}
            name={GLUTEN_FREE_LABEL}
            checked={state.checkboxes[GLUTEN_FREE_VALUE]}
            onClick={handleCheckboxClick}
          />
          <Checkbox
            id={FIELD_IDS.DAIRY_FREE}
            name={DAIRY_FREE_LABEL}
            checked={state.checkboxes[DAIRY_FREE_VALUE]}
            onClick={handleCheckboxClick}
          />
          <Dropdown
            id={FIELD_IDS.MEAL_TIME}
            name={MEAL_TIME_LABEL}
            options={MEAL_TIME_RECORDS}
            onChange={handleDropdownChange}
          />
          <TextInput
            id={FIELD_IDS.FOOD_TYPE}
            label={FOOD_TYPE_LABEL}
            placeholder="Pasta, Sandwich, etc."
            subPlaceholder={FOOD_TYPE_DESCRIPTION_LABEL}
            onChange={handleTextInputChange}
          />
          <TextInput
            isTextArea
            id={FIELD_IDS.INCLUDE_FOODS}
            label={INCLUDE_FOODS_LABEL}
            placeholder="Include Foods"
            onChange={handleTextInputChange}
          />
          <TextInput
            isTextArea
            id={FIELD_IDS.EXCLUDE_FOODS}
            label={EXCLUDE_FOODS_LABEL}
            placeholder="Exclude Foods"
            onChange={handleTextInputChange}
          />
          <button className="btn mt-4" type="submit">
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
  readonly dropdowns: {
    [key: string]: ANIMAL_PRODUCT_USAGE_VALUE | MEAL_TIME_VALUE;
  };
  readonly textInputs: { [key: string]: string };
}

export default FormSection;
