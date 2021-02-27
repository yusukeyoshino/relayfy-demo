import classes from "./MealTabs.module.css";
import React, { useState } from "react";

const MealTabs = ({ isScrolling }) => {
  const TABS = ["Bowls", "Wraps", "Sweets", "Drinks"];
  const [selectedTab, setSelectedTab] = useState("Bowls");

  return (
    <div className={isScrolling ? classes.wrapper_closed : classes.wrapper}>
      {TABS.map((tab) => {
        return (
          <div
            onClick={() => {
              setSelectedTab(tab);
              console.log(selectedTab);
            }}
            className={tab === selectedTab ? classes.tab_selected : classes.tab}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
};

export default MealTabs;
