import React, { useState } from "react";
import "../assets/backgroundChanger.css";

function ThemeSwitcher({goBack}) {
  const [bgcolor, setbgColor] = useState("black");

  return (
    <>
      <div className="btnBgBody py-5 flex flex-col gap-4 justify-between items-center" style={{ backgroundColor: bgcolor }}>
        <div className="BtnWrapper py-3 px-4 bg-white grid grid-cols-8 gap-2 w-[96%] mx-auto justify-center align-center rounded-lg">
          <button
            className="btn text-xl text-white font-semibold bg-red-600 py-2 rounded-xl"
            onClick={() => setbgColor("red")}> Red</button>
          <button
            className="btn text-xl text-white font-semibold bg-green-600 py-2 rounded-xl"
            onClick={() => setbgColor("green")}>Green</button>
          <button
            className="btn text-xl text-white font-semibold bg-yellow-500 py-2 rounded-xl"
            onClick={() => setbgColor("yellow")}>Yellow</button>
          <button
            className="btn text-xl text-white font-semibold bg-black py-2 rounded-xl"
            onClick={() => setbgColor("black")} > Black </button>
          <button
            className="btn text-xl text-white font-semibold bg-blue-600 py-2 rounded-xl"
            onClick={() => setbgColor("blue")}> Blue </button>
          <button
            className="btn text-xl text-white font-semibold bg-purple-600 py-2 rounded-xl"
            onClick={() => setbgColor("purple")}>Purple</button>
          <button
            className="btn text-xl text-white font-semibold bg-gray-600 py-2 rounded-xl"
            onClick={() => setbgColor("gray")}>Gray</button>
          <button
            className="btn text-xl text-black font-semibold bg-white inset-shadow-sm inset-shadow-indigo-300 py-2 rounded-xl"
            onClick={() => setbgColor("white")}>White</button>
        </div>
        <div className="BackBtnWrapper bg-black w-[20%] py-3 px-4 bg-white grid grid-cols-1 gap-2 mx-auto justify-center align-center rounded-lg">
           <button className="btn text-xl text-white font-semibold py-2 rounded-xl" onClick={goBack} style={{ backgroundColor: bgcolor }}>Go Back To Card</button>
        </div>
      </div>
    </>
  );
}

export default ThemeSwitcher;
