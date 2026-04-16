import { StrictMode } from "react";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Hooks from "./Hooks.jsx";
import ThemeSwitcher from './components/ThemeSwitcher'

const Main = () => {
    const [showTheme, setShowTheme] = useState(false);

  return (
    <>
      {showTheme ? (<ThemeSwitcher goBack={() => setShowTheme(false)} />) : (<Hooks onShowTheme={() => setShowTheme(true)} />)}
    </>
  );
} 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
