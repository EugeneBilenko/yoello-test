import React, { useState } from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import history from "../../history";
import { AppRoute } from "../../consts";
import Icons from '../../assets/icons';

const { DRINKS, FOOD, DISCOUNTS, SEARCH } = AppRoute;

const { DRINKS_ICON, FOOD_ICON, DISCOUNTS_ICON, SEARCH_ICON } = Icons;

const NavigationMenu = () => {
  const [activeTab, setActiveTab] = useState(DRINKS);
  return (
    <div className="Header__nav-menu">
      <Tabs
        className="Header__nav-menu__tabs"
        component="nav"
        value={activeTab}
        onChange={(e, value) => {
          setActiveTab(value);
          history.push(value);
        }}
      >
        <Tab icon={DRINKS_ICON} value={DRINKS} />
        <Tab icon={FOOD_ICON} value={FOOD} />
        <Tab icon={DISCOUNTS_ICON} value={DISCOUNTS} />
        <Tab icon={SEARCH_ICON} value={SEARCH} />
      </Tabs>
    </div>
  )
};

export default NavigationMenu;