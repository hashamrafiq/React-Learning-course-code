import { useState } from "react";
import "./assets/hooks.css";
import Card from "./components/Card";

function Hooks() {
  const [Counter, setCounter] = useState(15);
  const [Text, setText] = useState("type Of Number");
  const [show, setShow] = useState(false);
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
  const Showtailwind = () => {
    setShow(true);
  };
  const hideTailwind = () => {
    setShow(false);
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
      {show && (
        <Card
          username="Muhammad Hasham"
          description="Same Card With Different username"
          linkText="Click Me"
          mailText="hr@gmail.com"
          contectForm="Explore More"
        />
      )}
      {show && (
        <Card
          username="Second Profile"
          description="Same Card With Different username"
          linkText="Visit Me"
          mailText="extra@gmail.com"
          contectForm="Explore More"
        />
      )}
    </>
  );
}
export default Hooks;
