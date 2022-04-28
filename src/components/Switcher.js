import React, { useState } from "react";
import useDarkSide from "../hooks/useDarkSide";
import { AnimatePresence, motion } from "framer-motion";
// import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

import { ReactComponent as MoonIcon } from "../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../assets/icon-sun.svg";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  // const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false)
  const [isOn, setIsOn] = useState(true);

  // const toggleSwitch = () => setIsOn(!isOn);

  const toggleDarkMode = () => {
    setIsOn(colorTheme === "light" ? false : true);
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
        <div className="flex gap-4 items-center cursor-pointer text-darkTheme-text hover:text-darkTheme-switch-hover font-bold duration-75">
          <p>Light</p>
          <AnimatePresence>
            <motion.div initial={{ y: -20 }} animate={{ y: 0 }}>
              <SunIcon />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex gap-4 items-center cursor-pointer text-lightTheme-switch hover:text-lightTheme-logo font-bold duration-75">
          <p>Dark</p>

          <motion.div initial={{ y: -20 }} animate={{ y: 0 }}>
            <MoonIcon />
          </motion.div>
        </div>
      )}
    </div>
  );
}
