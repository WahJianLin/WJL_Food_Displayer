import { FIELD_IDS } from "@/app/supplimentary/constants";
import React from "react";

function TextInput(props: ITextinputProps) {
  const textInput = (): JSX.Element => {
    return !props.isTextArea ? (
      <input
        type="text"
        placeholder={props.placeholder}
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => props.onChange(props.id, e.target.value)}
      />
    ) : (
      <textarea
        className="textarea textarea-bordered h-24 w-full"
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(props.id, e.target.value)}
      />
    );
  };
  return (
    <div>
      <label className="w-full max-w-xs">
        <div className="label">
          <span className="label-text">{props.label}</span>
          {props.description && (
            <span className="label-text-alt">{props.description}</span>
          )}
        </div>
      </label>
      {textInput()}
    </div>
  );
}

interface ITextinputProps {
  readonly isTextArea?: boolean;
  readonly id: FIELD_IDS;
  readonly label: string;
  readonly placeholder: string;
  readonly description?: string;
  onChange(id: FIELD_IDS, value: string): void;
}

export default TextInput;
