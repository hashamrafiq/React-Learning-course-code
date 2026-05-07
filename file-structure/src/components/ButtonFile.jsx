import "../assets/css/hooks.css";


function ButtonFile({Counter, Text, addVal, RemoveVal, ResetValue, EvenChecker, Showtailwind, hideTailwind, onShowTheme }) {
  return (
    <>
      <h2 className="text-3xl mb-2">Counter value: {Counter}</h2>
      <button className="btnDesign border-2 border-solid" onClick={addVal}>
        Add Value
      </button>
      <button className="btnDesign border-2 border-solid" onClick={RemoveVal}>
        Remove Value
      </button>
      <button className="btnDesign border-2 border-solid" onClick={ResetValue}>
        Reset Value
      </button>
      <button className="btnDesign border-2 border-solid" onClick={EvenChecker}>
        {Text}
      </button>
      <button
        className="btnDesign border-2 border-solid"
        onClick={Showtailwind}
      >
        Show Tailwind
      </button>
      <button
        className="btnDesign border-2 border-solid"
        onClick={hideTailwind}
      >
        Hide Tailwind
      </button>
      <button className="btnDesign border-2 border-solid" onClick={onShowTheme}>
        Go to Theme Switcher
      </button>

    </>
  );
}

export default ButtonFile;
