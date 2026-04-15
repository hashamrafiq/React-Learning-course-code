import { useState } from "react";


import "./assets/hooks.css";

function Hooks() {
  const [Counter, setCounter] = useState(15);
  const [Text, setText] = useState("type Of Number");
  // add Value
  const addVal = () => {
    if (Counter < 20) {
      setCounter(Counter + 1);
    }
  };
  // Remove Value
  const RemoveVal = () => {
    if (Counter > 0) {
      setCounter(Counter - 1);
    }
  };
  // Reset Value
  const ResetValue = () => {
    setCounter(0);
  };
  //  Value checker
  const EvenChecker = () => {
    if (Counter % 2 == 0) {
      setText("Even Number");
    } else {
      setText("Odd Number");
    }
  };
  return (
    <>
      <h2>Counter value: {Counter}</h2>
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
    </>
  );
}

export default Hooks;
