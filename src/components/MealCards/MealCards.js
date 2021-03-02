import classes from "./MealCards.module.css";
import React, { useEffect, useState } from "react";
import mealsJson from "../../products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const MealCard = ({
  setSelectedMeals,
  selectedMeals,
  calculateTotal,
  calculateTotalUnits,
}) => {
  const [mealsList, setMealsList] = useState([]);

  useEffect(() => {
    setMealsList(mealsJson);
  }, []);

  const getPrice = (price) => {
    return `$${price / 100}`;
  };

  const addMeal = (meal) => {
    let newSelectedMeals = { ...selectedMeals };

    if (selectedMeals.hasOwnProperty(meal.name)) {
      newSelectedMeals[meal.name].count++;
      setSelectedMeals((prevState) => newSelectedMeals);
    } else {
      newSelectedMeals[meal.name] = { count: 1, price: meal.price };

      setSelectedMeals(newSelectedMeals);
    }
    calculateTotal(newSelectedMeals);
    calculateTotalUnits(newSelectedMeals);
  };

  console.log();
  if (mealsList.length > 0) {
    return (
      <ul class={classes.wrapper}>
        {mealsList.map((meal) => {
          return (
            <li className={classes.meal_card}>
              {selectedMeals.hasOwnProperty(meal.name) &&
              selectedMeals[meal.name].count > 0 ? (
                <div className={classes.meal_card__count}>
                  {selectedMeals[meal.name].count}
                </div>
              ) : (
                <div className={classes.meal_card__count_closed}></div>
              )}
              <img
                className={classes.meal_card__picture}
                src={`images/${meal.image}`}
                alt=""
              />
              <div className={classes.meal_card__descriptions}>
                <div className={classes.meal_card__name}>{meal.name}</div>
              </div>
              <div className={classes.meal__card__price_add}>
                <div className={classes.meal_card__price}>
                  {getPrice(meal.price)}
                </div>
                <div
                  className={classes.meal_card__add}
                  onClick={() => addMeal(meal)}
                >
                  <FontAwesomeIcon
                    className={classes.meal_card__add_icon}
                    icon={faPlusCircle}
                  />
                  Add
                </div>
              </div>
            </li>
          );
        })}
        {mealsList.map((meal) => {
          return (
            <li className={classes.meal_card}>
              {selectedMeals.hasOwnProperty(meal.name) &&
              selectedMeals[meal.name].count > 0 ? (
                <div className={classes.meal_card__count}>
                  {selectedMeals[meal.name].count}
                </div>
              ) : (
                <div className={classes.meal_card__count_closed}></div>
              )}
              <img
                className={classes.meal_card__picture}
                src={`images/${meal.image}`}
                alt=""
              />
              <div className={classes.meal_card__descriptions}>
                <div className={classes.meal_card__name}>{meal.name}</div>
              </div>
              <div className={classes.meal__card__price_add}>
                <div className={classes.meal_card__price}>
                  {getPrice(meal.price)}
                </div>
                <div
                  className={classes.meal_card__add}
                  onClick={() => addMeal(meal)}
                >
                  <FontAwesomeIcon
                    className={classes.meal_card__add_icon}
                    icon={faPlusCircle}
                  />
                  Add
                </div>
              </div>
            </li>
          );
        })}
        {mealsList.map((meal) => {
          return (
            <li className={classes.meal_card}>
              {selectedMeals.hasOwnProperty(meal.name) &&
              selectedMeals[meal.name].count > 0 ? (
                <div className={classes.meal_card__count}>
                  {selectedMeals[meal.name].count}
                </div>
              ) : (
                <div className={classes.meal_card__count_closed}></div>
              )}
              <img
                className={classes.meal_card__picture}
                src={`images/${meal.image}`}
                alt=""
              />
              <div className={classes.meal_card__descriptions}>
                <div className={classes.meal_card__name}>{meal.name}</div>
              </div>
              <div className={classes.meal__card__price_add}>
                <div className={classes.meal_card__price}>
                  {getPrice(meal.price)}
                </div>
                <div
                  className={classes.meal_card__add}
                  onClick={() => addMeal(meal)}
                >
                  <FontAwesomeIcon
                    className={classes.meal_card__add_icon}
                    icon={faPlusCircle}
                  />
                  Add
                </div>
              </div>
            </li>
          );
        })}
        {mealsList.map((meal) => {
          return (
            <li className={classes.meal_card}>
              {selectedMeals.hasOwnProperty(meal.name) &&
              selectedMeals[meal.name].count > 0 ? (
                <div className={classes.meal_card__count}>
                  {selectedMeals[meal.name].count}
                </div>
              ) : (
                <div className={classes.meal_card__count_closed}></div>
              )}
              <img
                className={classes.meal_card__picture}
                src={`images/${meal.image}`}
                alt=""
              />
              <div className={classes.meal_card__descriptions}>
                <div className={classes.meal_card__name}>{meal.name}</div>
              </div>
              <div className={classes.meal__card__price_add}>
                <div className={classes.meal_card__price}>
                  {getPrice(meal.price)}
                </div>
                <div
                  className={classes.meal_card__add}
                  onClick={() => addMeal(meal)}
                >
                  <FontAwesomeIcon
                    className={classes.meal_card__add_icon}
                    icon={faPlusCircle}
                  />
                  Add
                </div>
              </div>
            </li>
          );
        })}
        {mealsList.map((meal) => {
          return (
            <li className={classes.meal_card}>
              {selectedMeals.hasOwnProperty(meal.name) &&
              selectedMeals[meal.name].count > 0 ? (
                <div className={classes.meal_card__count}>
                  {selectedMeals[meal.name].count}
                </div>
              ) : (
                <div className={classes.meal_card__count_closed}></div>
              )}
              <img
                className={classes.meal_card__picture}
                src={`images/${meal.image}`}
                alt=""
              />
              <div className={classes.meal_card__descriptions}>
                <div className={classes.meal_card__name}>{meal.name}</div>
              </div>
              <div className={classes.meal__card__price_add}>
                <div className={classes.meal_card__price}>
                  {getPrice(meal.price)}
                </div>
                <div
                  className={classes.meal_card__add}
                  onClick={() => addMeal(meal)}
                >
                  <FontAwesomeIcon
                    className={classes.meal_card__add_icon}
                    icon={faPlusCircle}
                  />
                  Add
                </div>
              </div>
            </li>
          );
        })}
        {mealsList.map((meal) => {
          return (
            <li className={classes.meal_card}>
              {selectedMeals.hasOwnProperty(meal.name) &&
              selectedMeals[meal.name].count > 0 ? (
                <div className={classes.meal_card__count}>
                  {selectedMeals[meal.name].count}
                </div>
              ) : (
                <div className={classes.meal_card__count_closed}></div>
              )}
              <img
                className={classes.meal_card__picture}
                src={`images/${meal.image}`}
                alt=""
              />
              <div className={classes.meal_card__descriptions}>
                <div className={classes.meal_card__name}>{meal.name}</div>
              </div>
              <div className={classes.meal__card__price_add}>
                <div className={classes.meal_card__price}>
                  {getPrice(meal.price)}
                </div>
                <div
                  className={classes.meal_card__add}
                  onClick={() => addMeal(meal)}
                >
                  <FontAwesomeIcon
                    className={classes.meal_card__add_icon}
                    icon={faPlusCircle}
                  />
                  Add
                </div>
              </div>
            </li>
          );
        })}
        {mealsList.map((meal) => {
          return (
            <li className={classes.meal_card}>
              {selectedMeals.hasOwnProperty(meal.name) &&
              selectedMeals[meal.name].count > 0 ? (
                <div className={classes.meal_card__count}>
                  {selectedMeals[meal.name].count}
                </div>
              ) : (
                <div className={classes.meal_card__count_closed}></div>
              )}
              <img
                className={classes.meal_card__picture}
                src={`images/${meal.image}`}
                alt=""
              />
              <div className={classes.meal_card__descriptions}>
                <div className={classes.meal_card__name}>{meal.name}</div>
              </div>
              <div className={classes.meal__card__price_add}>
                <div className={classes.meal_card__price}>
                  {getPrice(meal.price)}
                </div>
                <div
                  className={classes.meal_card__add}
                  onClick={() => addMeal(meal)}
                >
                  <FontAwesomeIcon
                    className={classes.meal_card__add_icon}
                    icon={faPlusCircle}
                  />
                  Add
                </div>
              </div>
            </li>
          );
        })}
        {mealsList.map((meal) => {
          return (
            <li className={classes.meal_card}>
              {selectedMeals.hasOwnProperty(meal.name) &&
              selectedMeals[meal.name].count > 0 ? (
                <div className={classes.meal_card__count}>
                  {selectedMeals[meal.name].count}
                </div>
              ) : (
                <div className={classes.meal_card__count_closed}></div>
              )}
              <img
                className={classes.meal_card__picture}
                src={`images/${meal.image}`}
                alt=""
              />
              <div className={classes.meal_card__descriptions}>
                <div className={classes.meal_card__name}>{meal.name}</div>
              </div>
              <div className={classes.meal__card__price_add}>
                <div className={classes.meal_card__price}>
                  {getPrice(meal.price)}
                </div>
                <div
                  className={classes.meal_card__add}
                  onClick={() => addMeal(meal)}
                >
                  <FontAwesomeIcon
                    className={classes.meal_card__add_icon}
                    icon={faPlusCircle}
                  />
                  Add
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return "";
  }
};

export default MealCard;
