import { useState } from "react";

function useCounter() {
  const [Counter, setCounter] = useState(15);
  const [Text, setText] = useState("type Of Number");

  const addVal = () => {
    if (Counter < 20) setCounter(Counter + 1);
  };

  const RemoveVal = () => {
    if (Counter > 0) setCounter(Counter - 1);
  };

  const ResetValue = () => {
    setCounter(0);
  };

  const EvenChecker = () => {
    setText(Counter % 2 === 0 ? "Even Number" : "Odd Number");
  };

  return {
    Counter,
    Text,
    addVal,
    RemoveVal,
    ResetValue,
    EvenChecker
  };
}

export default useCounter;