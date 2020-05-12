import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import {
	fetchDrinks,
	drinksSelect,
	selectDrinks,
	selectSelectedDrink,
  drinksFilterSelect
} from "../../store/drinks";
import { addItemToCart } from "../../store/cart";

import ProductModal from "../../components/ProductModal";

import PageTabs from '../../components/PageTabs';

import "./styles.scss";

const Drinks = ({
									drinks,
									selectedDrink,
									fetchDrinks,
									drinksSelect,
									addItemToCart,
                  drinksFilterSelect
								}) => {
	const container = useRef(null);

	useEffect(() => {
		fetchDrinks();
	}, [fetchDrinks]);

	return drinks && (
		<main className="Drinks" ref={container}>
			<PageTabs drinks={drinks} onDrinkSelect={drinksSelect} onDrinkFilterChange={drinksFilterSelect} />
			<ProductModal
				container={container.current}
				product={selectedDrink}
				onClose={() => drinksSelect(null)}
				onAddItemToCart={addItemToCart}
			>
				<div>selectedDrink</div>
			</ProductModal>
		</main>
	);
};

const mapStateToProps = state => ({
	drinks: selectDrinks(state),
	selectedDrink: selectSelectedDrink(state),
});

const mapDispatchToProps = ({
	fetchDrinks: fetchDrinks,
	drinksSelect: drinksSelect,
	addItemToCart: addItemToCart,
  drinksFilterSelect: drinksFilterSelect,
});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
