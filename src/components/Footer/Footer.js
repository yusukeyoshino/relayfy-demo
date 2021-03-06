import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Footer = ({
  total,
  totalUnits,
  setShowSelectedMeals,
  setCheckout,
  isScrolling,
  setSelectedMealIndex,
  selectedMealIndex,
  showSelectedMeals,
}) => {
  return (
    <>
      <div className={classes.total}>
        <div className={classes.total__count}>{totalUnits}</div>
        <div className={classes.total__price}>
          <div>Total</div>
          <div className={classes.total__number}>$ {total}</div>
          <div className={classes.total__order_icons}>
            <FontAwesomeIcon
              onClick={() => {
                setSelectedMealIndex(1);
                setCheckout(false);
                setShowSelectedMeals(true);
              }}
              icon={faShoppingCart}
              className={classes.total__order_icon}
            />
            {totalUnits > 0 ? (
              <div className={classes.total__order_count}>{totalUnits}</div>
            ) : (
              <div className={classes.total__order_count_closed}></div>
            )}
          </div>
        </div>
      </div>
      <div
        className={classes.footer}
        style={showSelectedMeals ? { backgroundColor: "#fafad3" } : {}}
      >
        <div
          style={showSelectedMeals ? { opacity: "0" } : {}}
          className={classes.footer__checkout}
          onClick={() => {
            console.log(selectedMealIndex);
            setSelectedMealIndex(1);
            setShowSelectedMeals(true);
            setCheckout(true);
          }}
        >
          Check Out
        </div>
      </div>
    </>
  );
};

export default Footer;
