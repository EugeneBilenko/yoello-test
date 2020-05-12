import { DrinksTabs } from '../../consts';

const selectDrink = state => state.drinks;
const selectDrinkFilter = state => selectDrink(state).selectedFilter;

export const selectDrinks = state => {
	const selectedFilter = selectDrinkFilter(state);
	const drinks = selectDrink(state).drinks;
	if (selectedFilter === DrinksTabs[0]) {
		return drinks;
	} else {
		return drinks.filter((drink) => {
			return drink.food_pairing.join().includes(selectedFilter);
		});
	}
};
export const selectSelectedDrink = state => selectDrink(state).selectedDrink;
