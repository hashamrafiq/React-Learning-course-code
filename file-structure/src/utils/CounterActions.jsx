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