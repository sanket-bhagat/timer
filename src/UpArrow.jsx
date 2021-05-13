import React from "react";

function UpArrow(props) {
  return (
    <div className="col-6 up-arrow">
      <button
        style={{ visibility: props.visibility }}
        className="btn btn-outline-dark btn-lg"
        onClick={() => {
          props.onClick(props.name);
        }}
      >
        <i className="fas fa-angle-up"></i>
      </button>
    </div>
  );
}

export default UpArrow;
