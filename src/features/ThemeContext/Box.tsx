import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <button
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
    >
      Box
    </button>
  );
};

export default Box;
