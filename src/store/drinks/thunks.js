import fetchBeers from "../../api";
import { drinksFetch, drinksFetchSuccess, drinksFetchFail } from "./actions";

export const fetchDrinks = () => async dispatch => {
  dispatch(drinksFetch());

  try {
    const drinks = await fetchBeers();
    dispatch(drinksFetchSuccess(drinks));
  } catch (error) {
    dispatch(drinksFetchFail(error));
  }
};