import classes from "./MealTabs.module.css";
import React from "react";

const MealTabs = ({ isScrolling, TABS, currentTab, setCurrentTab }) => {
  return (
    <div className={isScrolling ? classes.wrapper_closed : classes.wrapper}>
      {TABS.map((tab, i) => {
        return (
          <div
            key={tab}
            onClick={() => {
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
