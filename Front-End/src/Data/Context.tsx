import { useState, createContext } from "react";

export const Context = createContext<any>(null);

const ContextProvider = ({ children }: any) => {
  const [userDetails, setUserDetails] = useState<any>(null);

  const ContextValues = {
    userDetails,
    setUserDetails,
  };

  return <Context.Provider value={ContextValues}>{children}</Context.Provider>;
};

export default ContextProvider;
