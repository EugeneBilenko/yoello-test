import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { DrinksTabs } from '../../consts';
import PageTabsNav from './PageTabsNav';
import DrinksList from '../DrinksList';
import PageTabPanel from './PageTabPanel';

const PageTabs = (props) => {
	const [tabIndex, selectTabIndex] = useState(0);
	const handleChangeIndex = (index) => {
		selectTabIndex(index);
		props.onDrinkFilterChange(DrinksTabs[index]);
	};

	return (
		<div className="tabs-content">
			<PageTabsNav
				selectedTabIndex={tabIndex}
				tabs={DrinksTabs}
				selectedTab={tabIndex}
				onSelectTab={handleChangeIndex}
			/>
			<div className="tabs-content">
				<SwipeableViews
					index={tabIndex}
					onChangeIndex={handleChangeIndex}
				>
					<PageTabPanel value={tabIndex} index={0}>
						<DrinksList drinks={props.drinks} onDrinksSelect={props.onDrinkSelect} />
					</PageTabPanel>
					<PageTabPanel value={tabIndex} index={1}>
						<DrinksList drinks={props.drinks} onDrinksSelect={props.onDrinkSelect} />
					</PageTabPanel>
					<PageTabPanel value={tabIndex} index={2}>
						<DrinksList drinks={props.drinks} onDrinksSelect={props.onDrinkSelect} />
					</PageTabPanel>
				</SwipeableViews>
			</div>
		</div>
	);
};

PageTabs.propTypes = {
	onDrinkFilterChange: PropTypes.func,
	onDrinkSelect: PropTypes.func,
	drinks: PropTypes.array,
};

export default PageTabs;
