import React from "react";

function Button(props) {
  return (
    <div className={props.colSize + " button"}>
      <button
        className={"btn btn-outline-dark btn-lg action-button"}
        onClick={() => {
          props.onClick();
        }}
      >
        <i className={props.ofType}></i>
      </button>
    </div>
  );
}

export default Button;
