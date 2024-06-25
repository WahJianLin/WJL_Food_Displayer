import { ANIMAL_PRODUCT_USAGE_NAME, ANIMAL_PRODUCT_USAGE_VALUE, ANIMAL_USAGE_LABEL } from '@/app/supplimentary/constants';
import React, { Dispatch, SetStateAction } from 'react'

function Dropdown(props: IDropdownProps) {
  return (
  <div>
    <label className="label cursor-pointer">
      <span className="label-text">{ANIMAL_USAGE_LABEL}</span>
    </label>
    <select
      className="select select-bordered w-full max-w-xs"
      // add in onchange later
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
  </div>
  )
}

interface IDropdownProps {
  onChange(value: any): void;
}

export default  Dropdown;