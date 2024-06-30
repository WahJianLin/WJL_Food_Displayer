import React from "react";

function Toast(props: IToastProps) {
  return (
    <div>
      <div className="toast toast-top toast-end ">
        <div className="alert bg-red-500 border-0 p-6 max-w-1/8 text-wrap">
          <span>{props.message}</span>
        </div>
      </div>
    </div>
  );
}

interface IToastProps {
  readonly message: string;
}

export default Toast;
