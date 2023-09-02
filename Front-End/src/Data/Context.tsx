import { useState, createContext } from "react";

export const Context = createContext<any>(null);

const ContextProvider = ({ children }: any) => {
  const [userDetails, setUserDetails] = useState<any>(null);
  const [token, setToken] = useState("");
  const [showSignUpBox, setShowSignUpBox] = useState(false);
  const [responseContent, setResponseContent] = useState([]);

  const ContextValues = {
    showSignUpBox,
    setShowSignUpBox,
    responseContent,
    setResponseContent,
    userDetails,
    setUserDetails,
    token,
    setToken,
  };

  return <Context.Provider value={ContextValues}>{children}</Context.Provider>;
};

export default ContextProvider;
