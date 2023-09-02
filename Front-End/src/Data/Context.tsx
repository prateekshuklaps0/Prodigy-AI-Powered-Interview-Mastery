import { useState, createContext } from "react";

export const Context = createContext<any>(null);

const ContextProvider = ({ children }: any) => {
  const [userDetails, setUserDetails] = useState<any>(null);
  const [token, setToken] = useState("");
  const ContextValues = {
    userDetails,
    setUserDetails,
    token,
    setToken,
  };

  return <Context.Provider value={ContextValues}>{children}</Context.Provider>;
};

export default ContextProvider;
