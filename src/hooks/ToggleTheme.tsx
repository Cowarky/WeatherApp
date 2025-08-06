import { useEffect } from "react";
import { isNight } from "../services/utils/utils";

const ToggleTheme = () => {
  useEffect(() => {
    const root = document.documentElement;

    if (isNight()) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  });
};

export default ToggleTheme;
