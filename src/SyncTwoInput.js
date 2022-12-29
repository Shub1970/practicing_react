//syinctwoinput
//use calculator build hook logic
import React from "react";
import { useState } from "react";
import useConverter from "./calculatorHook";
const SyncTwoInput = () => {
  const [celseius, setCelseius] = useState(0);
  const [fariniet, setFariniet] = useState(32);
  const temp_f = useConverter({ temperature: celseius, scale: "F" });
  const temp_C = useConverter({ temperature: fariniet, scale: "C" });
  const handelCelsius = (e) => {
    setCelseius(e.target.value);
    setFariniet(temp_f);
  };
  const handelFariniet = (e) => {
    setFariniet(e.target.value);
    setCelseius(temp_C);
  };
  return (
    <>
      <label>
        celseius:
        <input value={celseius} onChange={(e) => handelCelsius(e)} />
      </label>
      <label>
        fariniet:
        <input value={fariniet} onChange={(e) => handelFariniet(e)} />
      </label>
    </>
  );
};

export default SyncTwoInput;
