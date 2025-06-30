import React, { useEffect, useState } from "react";

const useDebouncer = (inputQuery, delay) => {
  const [interState, setInputState] = useState(inputQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInputState(inputQuery);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputQuery, delay]);

  return interState;
};

export default useDebouncer;
