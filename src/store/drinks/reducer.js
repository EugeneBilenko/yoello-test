import {
	DRINKS_FETCH,
	DRINKS_FETCH_SUCCESS,
	DRINKS_FETCH_FAIL,
	DRINKS_SELECT, DRINKS_FILTER_CHANGE,
} from "./constants";
import { DrinksTabs } from '../../consts';

const initialState = {
	drinks: null,
	selectedDrink: null,
	selectedFilter: DrinksTabs[0],
	isLoading: false,
};

const drinks = (state = initialState, action) => {
	switch (action.type) {
		case DRINKS_FETCH:
			return {
				...state,
				isLoading: true,
			};
		case DRINKS_FETCH_SUCCESS:
			return {
				...state,
				drinks: action.payload,
				isLoading: false,
			};
		case DRINKS_FETCH_FAIL:
			return {
				...state,
				isLoading: false,
			};
		case DRINKS_SELECT:
			return {
				...state,
				selectedDrink: action.payload,
			};
		case DRINKS_FILTER_CHANGE:
			return {
				...state,
				selectedFilter: action.payload,
			};
		default:
			return state;
	}
};

export default drinks;
