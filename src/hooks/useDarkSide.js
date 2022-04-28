import { useEffect, useState } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    // Look at this later
    root.classList.remove("undefined");
    //

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to local Storage
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
