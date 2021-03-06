import classes from "./BackDrop.module.css";
import React from "react";

const BackDrop = (props) => {
  return (
    <>
      <div
        className={props.show ? classes.wrapper : classes.wrapper_closed}
        onClick={() => props.setShowModal(false)}
      >
        {props.children}
      </div>
    </>
  );
};

export default BackDrop;
