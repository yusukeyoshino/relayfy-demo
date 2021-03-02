import classes from "./MealTabs.module.css";
import React, { useState } from "react";

const MealTabs = ({ isScrolling, TABS, currentTab, setCurrentTab }) => {
  const [selectedTab, setSelectedTab] = useState("Bowls");

  return (
    <div className={isScrolling ? classes.wrapper_closed : classes.wrapper}>
      {TABS.map((tab, i) => {
        return (
          <div
            onClick={() => {
              setSelectedTab(tab);
              console.log(i);
              setCurrentTab(i);
            }}
            className={currentTab === i ? classes.tab_selected : classes.tab}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
};

export default MealTabs;
