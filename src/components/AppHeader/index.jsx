import React from "react";

import NavigationMenu from "../NavigationMenu";
import "./styles.scss";

const AppHeader = () => {
  return (
    <nav className="Header">
      <h1 className="Header__title">Demo App</h1>
      <NavigationMenu />
    </nav>
  )
};

export default AppHeader;