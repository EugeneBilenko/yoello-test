import React, { useState } from "react";

import PageTabsNav from "../../components/PageTabs/PageTabsNav";

import {DrinksTabs, FoodTabs} from "../../consts";

const Food = () => {
  const [tab, selectTab] = useState(DrinksTabs.ALL);
  return (
    <div className="Food">
      <PageTabsNav
        tabs={FoodTabs}
        onSelectTab={selectTab}
        selectedTab={tab}
      />
      <section>
        <p>Put Whatever you want here</p>
        <p>For extra's</p>
      </section>
    </div>
  )
};

export default Food;
