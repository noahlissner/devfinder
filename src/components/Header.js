import React from "react";
import Switcher from "./Switcher";

const Header = () => {
  return (
    <div className="w-full flex justify-between">
      <h1 className="text-lightTheme-logo dark:text-darkTheme-text">
        Devfinder
      </h1>
      <Switcher />
    </div>
  );
};

export default Header;
