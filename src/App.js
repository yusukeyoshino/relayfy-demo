import React, { useState, useEffect } from "react";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import MealCards from "./components/MealCards/MealCards";
import MealTabs from "./components/MealTabs/MealTabs";
import Footer from "./components/Footer/Footer";
import BackDrop from "./components/BackDrop/BackDrop";
import SelectedMealsList from "./components/Modal/SelectedMealsList";
import SwipeableViews from "react-swipeable-views";

function App() {
  const TABS = ["Bowls", "Wraps", "Sweets", "Drinks"];
  const [total, setTotal] = useState(0);
  const [selectedMeals, setSelectedMeals] = useState({});
  const [showSelectedMeals, setShowSelectedMeals] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [totalUnits, setTotalUnits] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);

  // When opening modal, there are two elements aligned vertically.
  // The first element is empty div element. The second element is modal.
  // Setting default index to 1 so that pop up modal shows up in front then you can swipe it down
  const [selectedMealIndex, setSelectedMealIndex] = useState(1);

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

  // hide header while user scrolling the menu
  // remove scroll event when pop up modal is opened

  useEffect(() => {
    let timeoutId;
    const scrollEvent = () => {
      if (!showSelectedMeals) {
        setIsScrolling(true);

        clearTimeout(timeoutId);

        timeoutId = setTimeout(function () {
          setIsScrolling(false);
        }, 1000);
      }
    };

    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, [showSelectedMeals]);

  return (
    <>
      <div>
        <Header isScrolling={isScrolling} />
        <MealTabs
          setCurrentTab={setCurrentTab}
          TABS={TABS}
          isScrolling={isScrolling}
          currentTab={currentTab}
        />
        {/* For demo use, all menu tabs are same menu */}
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
          total={total}
          totalUnits={totalUnits}
          setShowSelectedMeals={setShowSelectedMeals}
          setCheckout={setCheckout}
          setSelectedMealIndex={setSelectedMealIndex}
          selectedMealIndex={selectedMealIndex}
          showSelectedMeals={showSelectedMeals}
        />
      </div>
      <BackDrop show={showSelectedMeals} setShowModal={setShowSelectedMeals}>
        <SwipeableViews
          axis="y"
          index={selectedMealIndex}
          onChangeIndex={(i) => {
            setSelectedMealIndex(i);
            setShowSelectedMeals(false);
          }}
        >
          {/* to swipe down to dismiss the modal, there is a empty div element above */}
          <div
            style={{
              height: "100vh",
              zIndex: "1000",
            }}
          ></div>
          <SelectedMealsList
            show={showSelectedMeals}
            setSelectedMeals={setSelectedMeals}
            selectedMeals={selectedMeals}
            total={total}
            calculateTotal={calculateTotal}
            calculateTotalUnits={calculateTotalUnits}
            checkout={checkout}
          />
        </SwipeableViews>
      </BackDrop>
    </>
  );
}

export default App;
