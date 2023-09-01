import "./App.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Box } from "@chakra-ui/react";

import ParticleOptions from "./Styles/ParticleOptions.json";
import ChatPage from "./Pages/ChatPage";
import { SignUp } from "./Pages/SignUp";
import { Login } from "./Pages/Login";

function App() {
  const ParticleInit = useCallback((main: any) => {
    loadFull(main);
  }, []);

  return (
    <Box id="App">
      <Particles options={ParticleOptions} init={ParticleInit} />
      {true && <ChatPage />}
      
        {/* <SignUp/> */}
    </Box>
  );
}

export default App;
