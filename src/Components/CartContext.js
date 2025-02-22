import { createContext, useContext, useEffect, useState } from "react";
const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [userName,setUserName]=useState("login")

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  
  return (
    <CounterContext.Provider value={{ count, increment, decrement,setUserName ,userName,setCount}}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
