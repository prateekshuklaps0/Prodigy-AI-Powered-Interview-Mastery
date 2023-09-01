import "./App.css";
import { Box } from "@chakra-ui/react";
import { SignUp } from "./Pages/SignUp";
import { Login } from "./Pages/Login";

function App() {
  return <Box className="bg-red-5000">
    <Login/>
    {/* <SignUp/> */}
  </Box>;
}

export default App;
