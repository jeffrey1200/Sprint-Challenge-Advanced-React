import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

const NightButton = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <button onClick={toggleMode}>Night Mode</button>
    </div>
  );
};
export default NightButton;
