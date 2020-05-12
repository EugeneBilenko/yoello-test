import {
	DRINKS_FETCH,
	DRINKS_FETCH_FAIL,
	DRINKS_FETCH_SUCCESS, DRINKS_FILTER_CHANGE,
	DRINKS_SELECT,
} from "./constants";

export const drinksFetch = () => ({ type: DRINKS_FETCH });

export const drinksFetchSuccess = drinks => ({ type: DRINKS_FETCH_SUCCESS, payload: drinks });

export const drinksFetchFail = drinks => ({ type: DRINKS_FETCH_FAIL, payload: drinks });

export const drinksSelect = drink => ({ type: DRINKS_SELECT, payload: drink });
export const drinksFilterSelect = filter => {
	console.log('filter');
	console.log(filter);
	return { type: DRINKS_FILTER_CHANGE, payload: filter }
};
