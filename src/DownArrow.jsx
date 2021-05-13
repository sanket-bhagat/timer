import React from "react";

function DownArrow(props) {
  return (
    <div className="col-6 down-arrow">
      <button
        style={{ visibility: props.visibility }}
        className="btn btn-outline-dark btn-lg"
        onClick={() => {
          props.onClick(props.name);
        }}
      >
        <i className="fas fa-angle-down"></i>
      </button>
    </div>
  );
}

export default DownArrow;
