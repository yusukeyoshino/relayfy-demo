import React, { useState, useEffect } from "react";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import MealCards from "./components/MealCards/MealCards";
import MealTabs from "./components/MealTabs/MealTabs";
import Footer from "./components/Footer/Footer";
import BackDrop from "./components/BackDrop/BackDrop";
import SelectedMealsList from "./components/Modal/SelectedMealsList";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SwipeableViews from "react-swipeable-views";

const stripePromise = loadStripe(
  "pk_test_51H6anoHHZTQ6Py3DK1a4NR77HH46GAfcP3dwaImMdb6HE8GOXtJg2zf2K3Rs48LbEw2fRpiRxNAnCWjEkggKffzp00YyocFerY",
  { apiVersion: "2020-08-27" }
);

function App() {
  const TABS = ["Bowls", "Wraps", "Sweets", "Drinks"];
  const [total, setTotal] = useState(0);
  const [selectedMeals, setSelectedMeals] = useState({});
  const [showSelectedMeals, setShowSelectedMeals] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [totalUnits, setTotalUnits] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);

  const calculateTotal = (selectedMeals) => {
    let totalPrice = 0;
    for (const key in selectedMeals) {
      totalPrice += selectedMeals[key].price * selectedMeals[key].count;
    }
    totalPrice = totalPrice / 100;

    setTotal(totalPrice);
  };

  const calculateTotalUnits = (selectedMeals) => {
    let total = 0;
    for (const key in selectedMeals) {
      total += selectedMeals[key].count;
    }

    setTotalUnits(total);
  };

  let timeoutId;

  const scrollEvent = () => {
    if (!showSelectedMeals) {
      setIsScrolling(true);

      clearTimeout(timeoutId);

      timeoutId = setTimeout(function () {
        setIsScrolling(false);
      }, 300);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, [showSelectedMeals]);

  return (
    <>
      <Elements stripe={stripePromise}>
        <div className="wrapper">
          <Header isScrolling={isScrolling} />
          <MealTabs
            setCurrentTab={setCurrentTab}
            TABS={TABS}
            isScrolling={isScrolling}
            currentTab={currentTab}
          />

          <SwipeableViews
            index={currentTab}
            onChangeIndex={(i) => setCurrentTab(i)}
          >
            <MealCards
              setSelectedMeals={setSelectedMeals}
              selectedMeals={selectedMeals}
              total={total}
              calculateTotal={calculateTotal}
              calculateTotalUnits={calculateTotalUnits}
            />

            <MealCards
              setSelectedMeals={setSelectedMeals}
              selectedMeals={selectedMeals}
              total={total}
              calculateTotal={calculateTotal}
              calculateTotalUnits={calculateTotalUnits}
              setCurrentTab={setCurrentTab}
            />

            <MealCards
              setSelectedMeals={setSelectedMeals}
              selectedMeals={selectedMeals}
              total={total}
              calculateTotal={calculateTotal}
              calculateTotalUnits={calculateTotalUnits}
              setCurrentTab={setCurrentTab}
            />

            <MealCards
              setSelectedMeals={setSelectedMeals}
              selectedMeals={selectedMeals}
              total={total}
              calculateTotal={calculateTotal}
              calculateTotalUnits={calculateTotalUnits}
              setCurrentTab={setCurrentTab}
            />
          </SwipeableViews>

          <Footer
            isScrolling={isScrolling}
            total={total}
            totalUnits={totalUnits}
            setShowSelectedMeals={setShowSelectedMeals}
            setCheckout={setCheckout}
          />
        </div>
        <BackDrop show={showSelectedMeals} setShowModal={setShowSelectedMeals}>
          <SelectedMealsList
            setSelectedMeals={setSelectedMeals}
            selectedMeals={selectedMeals}
            total={total}
            calculateTotal={calculateTotal}
            calculateTotalUnits={calculateTotalUnits}
            checkout={checkout}
          />
        </BackDrop>
      </Elements>
    </>
  );
}

export default App;
