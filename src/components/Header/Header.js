import React from "react";
import classes from "./Header.module.css";

const Header = ({ isScrolling }) => {
  return (
    <div className={isScrolling ? classes.header_closed : classes.header}>
      Freshous
    </div>
  );
};

export default Header;
