import React, { useState, useEffect } from "react";
import classes from "./SelectedMealsList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Elements } from "@stripe/react-stripe-js";
import {
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripe = loadStripe(
  "pk_test_51H6anoHHZTQ6Py3DK1a4NR77HH46GAfcP3dwaImMdb6HE8GOXtJg2zf2K3Rs48LbEw2fRpiRxNAnCWjEkggKffzp00YyocFerY"
);

const SelectedMealsList = ({
  selectedMeals,
  setSelectedMeals,
  total,
  calculateTotal,
  calculateTotalUnits,
  checkout,
}) => {
  const TIPS = [0, 12, 15, 18];
  const [selectedTip, setSelectedTip] = useState(12);
  const [paymentRequest, setPaymentRequest] = useState(null);
  const stripe = useStripe();

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: "US",
        currency: "usd",
        total: {
          label: "Demo total",
          amount: 1099,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      console.log(pr);

      // Check the availability of the Payment Request API.
      pr.canMakePayment().then((result) => {
        console.log(result);
        if (result) {
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe]);

  const getMealsList = (key, i) => {
    if (selectedMeals[key].count === 0) {
      return;
    } else {
      return (
        <div className={classes.meal}>
          <div className={classes.meal__name}>
            {i + 1}.{key}
          </div>
          <div className={classes.meal__price}>
            ${selectedMeals[key].price / 100}
          </div>
          <div className={classes.meal__icons}>
            <FontAwesomeIcon
              className={classes.meal__icon}
              icon={faPlus}
              onClick={(e) => {
                e.stopPropagation();
                addAndRemoveItem(key, true);
              }}
            />
            <div className={classes.meal__count}>
              {selectedMeals[key].count}
            </div>
            <FontAwesomeIcon
              className={classes.meal__icon}
              icon={faMinus}
              onClick={(e) => {
                e.stopPropagation();
                addAndRemoveItem(key, false);
              }}
            />
          </div>
        </div>
      );
    }
  };

  const selectedTipStyle = () => {
    return {
      color: "#fafad3",
      backgroundColor: "",
    };
  };

  const options = {
    paymentRequest,
    style: {
      paymentRequestButton: {
        type: "default",
        // One of 'default', 'book', 'buy', or 'donate'
        // Defaults to 'default'

        theme: "dark",
        // One of 'dark', 'light', or 'light-outline'
        // Defaults to 'dark'

        height: "64px",
        // Defaults to '40px'. The width is always '100%'.
      },
    },
  };

  const renderTipOption = () => {
    return (
      <>
        <div className={classes.final_total}>
          <div className={classes.tip__wrapper}>
            <div className={classes.tip__titles}>
              <div className={classes.tip__title}>Tip</div>
              <div className={classes.tip__border}></div>
            </div>
            <div className={classes.tip__options}>
              {TIPS.map((tip) => (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTip(tip);
                  }}
                  className={
                    tip === selectedTip
                      ? classes.tip__option_selected
                      : classes.tip__option
                  }
                >
                  {tip}%
                </div>
              ))}
            </div>
          </div>
          <div className={classes.final_total__titles}>
            <div className={classes.final_total__title}>Total</div>
            <div className={classes.final_total__border}></div>
          </div>
          <div className={classes.final_total__wrapper}>
            <div className={classes.finlal_total__price}>${total}</div>
            <FontAwesomeIcon
              icon={faTimes}
              className={classes.final_total__icon}
            />
            <div className={classes.finlal_total__tip}>{selectedTip}%</div>
            <div className={classes.final_total__total}>
              ${Math.round((total * (selectedTip / 100) + total) * 100) / 100}
            </div>
          </div>
          <div
            className={classes.pay_button}
            onClick={(e) => {
              e.stopPropagation();
              window.alert("This is demo.");
            }}
          >
            Pay now
          </div>
          {paymentRequest && <PaymentRequestButtonElement options={options} />}
        </div>
      </>
    );
  };

  const addAndRemoveItem = (key, addItem) => {
    let newSelectedMeals = { ...selectedMeals };

    if (addItem) {
      newSelectedMeals[key].count++;
      setSelectedMeals((prevState) => newSelectedMeals);
      calculateTotal(newSelectedMeals);
      calculateTotalUnits(newSelectedMeals);
    } else {
      newSelectedMeals[key].count--;
      setSelectedMeals((prevState) => newSelectedMeals);
      calculateTotal(newSelectedMeals);
      calculateTotalUnits(newSelectedMeals);
    }
    console.log(newSelectedMeals);
  };
  if (total === 0) {
    return (
      <div className={classes.wrapper}>
        <div className={classes.no_meals}>No Meals Selected</div>
      </div>
    );
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.order__titles}>
        <div className={classes.order__title}>Order</div>
        <div className={classes.order__border}></div>
      </div>
      {Object.keys(selectedMeals).map((key, i) => getMealsList(key, i))}
      <div className={classes.border}></div>
      <div className={classes.total}>
        <div className={classes.total__title}>Subtotal:</div>
        <div className={classes.total__amount}>${total}</div>
        <div className={classes.total__space}></div>
      </div>
      {checkout && renderTipOption()}
    </div>
  );
};

export default SelectedMealsList;
