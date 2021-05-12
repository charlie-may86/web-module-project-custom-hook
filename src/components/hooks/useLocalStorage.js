import { useState } from "react";

const useLocalStorage = () => {
  const [key, setKey] = useState("");
  const [intialValue, setIntialValue] = useState("");

  const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : intialValue
  })

  const setValue = (value) => {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue];
};

export default useLocalStorage;
