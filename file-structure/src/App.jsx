import { useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Hooks from "../../learning-project/src/Hooks";
function App() {
  const [showTheme, setShowTheme] = useState(false);

  return (
    <>
      {showTheme ? (
        <ThemeSwitcher goBack={() => setShowTheme(false)} />
      ) : (
        <Hooks onShowTheme={() => setShowTheme(true)} />
      )}
    </>
  );
}

export default App;
