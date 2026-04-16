import { useState, useCallback } from "react";
import "./assets/css/App.css";

function App() {
  const [Length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpasword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+~{}[]";
    }
    for(let i = 1; i <= array.length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
    setpasword(pass)
  }, [length, numberAllowed, charAllowed, setpasword]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg my-8 py-4 px-3  text-orange-500 bg-gray-700">
        <h1 className="text-[24px] text-white text-center mb-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
          value={password}
          className="outline-none bg-white w-full py-2 px-4"
          placeholder="password" readOnly/>
        </div>
      </div>
    </>
  );
}

export default App;
