import React, { useState } from "react";
import useDarkSide from "../hooks/useDarkSide";
import { AnimatePresence, motion } from "framer-motion";

import { ReactComponent as MoonIcon } from "../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../assets/icon-sun.svg";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [isOn, setIsOn] = useState(false);

  const toggleDarkMode = () => {
    setIsOn(colorTheme === "light" ? false : true);
    setTheme(colorTheme);
  };

  return (
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
