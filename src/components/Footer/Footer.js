import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const Footer = ({
  total,
  totalUnits,
  setShowSelectedMeals,
  setCheckout,
  isScrolling,
}) => {
  return (
    <>
      <div className={isScrolling ? classes.total_closed : classes.total}>
        <div className={classes.total__count}>{totalUnits}</div>
        <div className={classes.total__price}>
          <div>Total</div>
          <div className={classes.total__number}>$ {total}</div>
          <FontAwesomeIcon
            onClick={() => {
              setCheckout(false);
              setShowSelectedMeals(true);
            }}
            icon={faClipboardList}
            className={classes.total__order_icon}
          />
        </div>
      </div>
      <div className={isScrolling ? classes.footer_closed : classes.footer}>
        <div
          className={classes.footer__checkout}
          onClick={() => {
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
