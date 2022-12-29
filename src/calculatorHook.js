// it will
import { useState, useEffect } from "react";

const useConverter = ({ temperature, scale }) => {
  const [convertedTemperature, setConvertedTemperature] = useState(0);

  useEffect(() => {
    if (scale === "F") {
      setConvertedTemperature((temperature * 9) / 5 + 32);
    } else if (scale === "C") {
      setConvertedTemperature(((temperature - 32) * 5) / 9);
    }
  }, [temperature, scale]);

  return convertedTemperature;
};

export default useConverter;
