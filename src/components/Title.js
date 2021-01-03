import React from "react";

const Title = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Title;
