import { FOOD_TYPE_DESCRIPTION_LABEL, FOOD_TYPE_LABEL } from '@/app/supplimentary/constants';
import React from 'react'

function TextInput(props: ITextinputProps) {
  return (
    <div>
      <label className="w-full max-w-xs pb-4">
            <div className="label">
              <span className="label-text">{props.label}</span>
              <span className="label-text-alt">
                {FOOD_TYPE_DESCRIPTION_LABEL}
              </span>
            </div>
        </label>
            <input
              type="text"
              placeholder={props.placeholder}
              className="input input-bordered w-full max-w-xs"
            //   onChange={(event) => setFoodTypeState(event.target.value)}
            />
    </div>
  )
}

interface ITextinputProps {
    label: string;
    placeholder: string;
}

export default TextInput;