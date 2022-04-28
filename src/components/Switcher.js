import React, { useState } from "react";
import useDarkSide from "../hooks/useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  // const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false)

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>
        <p className="text-lightTheme-switch dark:text-darkTheme-text">
          {colorTheme}
        </p>
      </button>
    </div>
  );
}
