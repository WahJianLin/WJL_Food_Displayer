"use client";
import React, { useState } from "react";
import {
  ANIMAL_PRODUCT_USAGE_VALUE,
  FORM_DESCRIPTION,
  FOOD_DISPLAYER_LABEL,
  DAIRY_FREE_LABEL,
  EXCLUDE_FOODS_LABEL,
  FIND_RANDOM_RECIPE_LABEL,
  FOOD_TYPE_LABEL,
  GLUTEN_FREE_LABEL,
  INCLUDE_FOODS_LABEL,
  MEAL_TIME_LABEL,
  MEAL_TIME_VALUE,
  GLUTEN_FREE_VALUE,
  DAIRY_FREE_VALUE,
  ANIMAL_USAGE_LABEL,
  FIELD_IDS,
  ANIMAL_PRODUCT_USAGE_RECORDS,
  MEAL_TIME_RECORDS,
  ERROR_MESSAGE_OVERLAP,
  FOOD_TYPE_DESCRIPTION,
  FOOD_TYPE_PLACE_HOLDER,
  COMMA_SEPERATED_DESCRIPTION,
  EXCLUDE_FOODS_PLACE_HOLDER,
  INCLUDE_FOODS_PLACE_HOLDER,
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

  const handleCheckboxClick = (id: FIELD_IDS): void => {
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
  ): void => {
    setState((prevState) => ({
      ...prevState,
      dropdowns: {
        ...prevState.dropdowns,
        [id]: value,
      },
    }));
  };

  const handleTextInputChange = (id: FIELD_IDS, value: string): void => {
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
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
      props.triggerError(ERROR_MESSAGE_OVERLAP);
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

  const foodIcon = () => {
    return (
      <svg
        className="w-12 h-12 fill-white"
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"></path>
      </svg>
    );
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-control gap-y-4">
          <h1 className="text-3xl">
            <div className="flex items-center gap-4">
              {foodIcon()}
              {FOOD_DISPLAYER_LABEL}
            </div>
          </h1>
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
            placeholder={FOOD_TYPE_PLACE_HOLDER}
            description={FOOD_TYPE_DESCRIPTION}
            onChange={handleTextInputChange}
          />
          <TextInput
            isTextArea
            id={FIELD_IDS.INCLUDE_FOODS}
            label={INCLUDE_FOODS_LABEL}
            description={COMMA_SEPERATED_DESCRIPTION}
            placeholder={INCLUDE_FOODS_PLACE_HOLDER}
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
  triggerError: (errorMsg: string) => void;
}

interface IFormSectionState {
  readonly checkboxes: { [key: string]: boolean };
  readonly dropdowns: {
    [key: string]: ANIMAL_PRODUCT_USAGE_VALUE | MEAL_TIME_VALUE;
  };
  readonly textInputs: { [key: string]: string };
}

export default FormSection;
