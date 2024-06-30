import {
  ANIMAL_PRODUCT_USAGE_VALUE,
  FIELD_IDS,
  MEAL_TIME_VALUE,
} from "@/app/supplimentary/constants";
import React from "react";

function Dropdown(props: IDropdownProps) {
  const getOptions = () => {
    return Object.keys(props.options).map(
      (key: string): JSX.Element => (
        <option key={key} value={props.options[key]} className="text-black">
          {key}
        </option>
      )
    );
  };

  return (
    <div>
      <label className="label cursor-pointer">
        <span className="label-text">{props.name}</span>
      </label>
      <select
        className="select select-bordered w-full max-w-xs"
        // add in onchange later
        onClick={(e) =>
          props.onChange(
            props.id,
            e.currentTarget.value as
              | ANIMAL_PRODUCT_USAGE_VALUE
              | MEAL_TIME_VALUE
          )
        }
      >
        {getOptions()}
      </select>
    </div>
  );
}

interface IDropdownProps {
  readonly name: string;
  readonly id: FIELD_IDS;
  readonly options: Record<string, string>;
  onChange(
    id: FIELD_IDS,
    value: ANIMAL_PRODUCT_USAGE_VALUE | MEAL_TIME_VALUE
  ): void;
}

export default Dropdown;
