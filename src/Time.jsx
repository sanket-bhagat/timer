import React from "react";

function Time(props) {
  return (
    <div className="col-6">
      <span className="number">
        {props.time < 10 && "0"}
        {props.time}
      </span>
    </div>
  );
}

export default Time;
