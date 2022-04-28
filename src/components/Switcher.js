import React, { useState } from "react";
import useDarkSide from "../hooks/useDarkSide";
import { motion } from "framer-motion";
// import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

import { ReactComponent as MoonIcon } from "../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../assets/icon-sun.svg";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  // const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false)
  const [isOn, setIsOn] = useState(false);

  // const toggleSwitch = () => setIsOn(!isOn);

  const toggleDarkMode = () => {
    setIsOn(!isOn);
    setTheme(colorTheme);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    // <div>
    //   <button onClick={toggleDarkMode}>
    //     <p className="text-lightTheme-switch dark:text-darkTheme-text">
    //       {colorTheme}
    //     </p>
    //   </button>
    // </div>

    <div className="" onClick={toggleDarkMode}>
      {isOn ? (
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1.0 }}
          className="flex gap-4 items-center cursor-pointer text-darkTheme-text hover:text-darkTheme-switch-hover font-bold duration-75"
        >
          <p className="">Light</p>
          <SunIcon />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1.0 }}
          className="flex gap-4 items-center cursor-pointer text-lightTheme-switch hover:text-lightTheme-logo font-bold duration-75"
        >
          <p className="">Dark</p>
          <MoonIcon className="" />
        </motion.div>
      )}
    </div>
  );
}
