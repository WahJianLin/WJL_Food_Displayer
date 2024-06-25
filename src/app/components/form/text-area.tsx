import React from 'react'

function TextArea(props: ITextAreaProps) {
  return (
    <div>
      <label className="pb-4">
            <div className="label">
              <span className="label-text">{props.label}</span>
            </div>
          </label>
            <textarea
              className="textarea textarea-bordered h-24 w-full"
              placeholder={props.placeholder}
              // onChange={(event) => setIncludeFoodsState(event.target.value)}
            ></textarea>
    </div>
  )
}

interface ITextAreaProps {
    label: string;
    placeholder: string;
}

export default TextArea;