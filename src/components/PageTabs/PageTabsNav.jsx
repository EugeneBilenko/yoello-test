import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import "./styles.scss";

const PageTabsNav = ({ selectedTabIndex, tabs, onSelectTab }) => {
	const handleTabChange = useCallback((e, value) => {
		onSelectTab(value);
	}, [onSelectTab]);
	return (
		<section className="page-tabs">
			<Tabs
				value={selectedTabIndex}
				onChange={handleTabChange}
			>
				{tabs.map((tabKey, index) => {
					return (
						<Tab
							key={tabKey}
							label={tabKey}
							value={index}
						/>
					);
				})}
			</Tabs>
		</section>
	);
};

PageTabsNav.propTypes = {
	selectedTabIndex: PropTypes.number,
	tabs: PropTypes.object,
	onSelectTab: PropTypes.func,
};

export default PageTabsNav;
