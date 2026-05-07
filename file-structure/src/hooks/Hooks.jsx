import useCounter from "./useCounter.jsx";
import useToggle from "./useToggle.jsx";
import ButtonFile from "../components/ButtonFile.jsx";
import Card from "../components/Card.jsx";

function Hooks({ onShowTheme }) {
  const { Counter, Text, addVal, RemoveVal, ResetValue, EvenChecker } =
    useCounter();
  const { show, Showtailwind, hideTailwind } = useToggle();
  return (
    <>
      <ButtonFile
        Counter={Counter}
        Text={Text}
        addVal={addVal}
        RemoveVal={RemoveVal}
        ResetValue={ResetValue}
        EvenChecker={EvenChecker}
        show={show}
        Showtailwind={Showtailwind}
        hideTailwind={hideTailwind}
        onShowTheme={onShowTheme}
      />

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
