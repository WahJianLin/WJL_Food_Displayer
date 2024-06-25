import React from 'react'

function Checkbox(props: ICheckboxProps) {
  return (
    <div>
      <label className="label cursor-pointer">
              <span className="label-text">{props.name}</span>
              <input
                type="checkbox"
                checked={props.checked}
                onChange={() => props.onChange(props.name)}
                className="text-red-600"
              />
            </label>
    </div>
  )
}


interface ICheckboxProps {
    readonly name: string
    readonly checked: boolean
    onChange(className: string): void
}

export default Checkbox;