import { useState, createContext } from "react";

export const Context = createContext<any>(null);

const ContextProvider = ({ children }: any) => {
  const API_Url = "http://localhost:5000";
  const [userDetails, setUserDetails] = useState<any>(null);
  const [token, setToken] = useState("");
  const [showSignUpBox, setShowSignUpBox] = useState(false);
  const [responseContent, setResponseContent] = useState([]);

  const ContextValues = {
    API_Url,
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
