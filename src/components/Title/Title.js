import React from "react";
import "./Title.css";

const Title = (props) => (
  <div className={"main-title"}>
    <p className="title-default">
     {props.children}
    </p>
  </div>
);

export default Title;
