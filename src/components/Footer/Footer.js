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
}) => {
  return (
    <>
      <div className={isScrolling ? classes.total_closed : classes.total}>
        <div className={classes.total__count}>{totalUnits}</div>
        <div className={classes.total__price}>
          <div>Total</div>
          <div className={classes.total__number}>$ {total}</div>
          <div className={classes.total__order_icons}>
            <FontAwesomeIcon
              onClick={() => {
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
