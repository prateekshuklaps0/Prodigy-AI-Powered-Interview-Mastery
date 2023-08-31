import { useState, createContext } from "react";

interface ContextTypes {
  randomState: any;
  setRandomState: any;
}
export const Context = createContext<ContextTypes | undefined>(undefined);

const ContextProvider = ({ children }: any) => {
  const [randomState, setRandomState] = useState(0);

  const ContextValues: ContextTypes = {
    randomState,
    setRandomState,
  };

  return <Context.Provider value={ContextValues}>{children}</Context.Provider>;
};

export default ContextProvider;
