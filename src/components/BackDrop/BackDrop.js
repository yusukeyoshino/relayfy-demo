import classes from "./BackDrop.module.css";
import React from "react";

const BackDrop = (props) => {
  return (
    <>
      <div
        className={classes.wrapper}
        style={props.show ? { display: "block" } : { display: "none" }}
        onClick={() => props.setShowModal(false)}
      >
        {props.children}
      </div>
    </>
  );
};

export default BackDrop;
