import React from "react";

function Checkbox(props: ICheckboxProps) {
  return (
    <div>
      <label className="label cursor-pointer">
        <span className="label-text">{props.name}</span>
        <input
          type="checkbox"
          checked={props.checked}
          onChange={() => props.onClick(props.id)}
          className="text-red-600"
        />
      </label>
    </div>
  );
}

interface ICheckboxProps {
  readonly name: string;
  readonly id: string;
  readonly checked: boolean;
  onClick(className: string): void;
}

export default Checkbox;
