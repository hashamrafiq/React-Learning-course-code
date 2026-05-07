import { useState } from "react";

function useToggle() {
  const [show, setShow] = useState(false);

  const Showtailwind = () => setShow(true);
  const hideTailwind = () => setShow(false);

  return { show, Showtailwind, hideTailwind };
}

export default useToggle;