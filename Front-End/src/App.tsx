import "./App.css";
import { useContext, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Box, Button } from "@chakra-ui/react";

import ParticleOptions from "./Styles/ParticleOptions.json";
import { Context } from "./Data/Context";
import { ChatPage } from "./Pages/ChatPage";
import { SignUp } from "./Pages/SignUp";
import { Login } from "./Pages/Login";

export type ParticleOptionsType = Record<string, unknown>;

function App() {
  const { token, showSignUpBox, setShowSignUpBox } = useContext(Context);

  const ParticleInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Box id="App">
      <Particles
        options={ParticleOptions as ParticleOptionsType}
        init={ParticleInit}
      />

      {token && <ChatPage />}

      {!token && (
        <Box>
          <Box
            m="auto"
            w={["230px"]}
            textAlign="center"
            mt={["100px"]}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              w={["100px"]}
              color={showSignUpBox ? "textColor" : "hovertext"}
              bg={showSignUpBox ? "bgA" : "bgB"}
              _hover={{ bg: "bgB" }}
              onClick={() => setShowSignUpBox(false)}
            >
              LogIn
            </Button>
            <Button
              w={["100px"]}
              color={showSignUpBox ? "hovertext" : "textColor"}
              bg={showSignUpBox ? "bgB" : "bgA"}
              _hover={{ bg: "bgB" }}
              onClick={() => setShowSignUpBox(true)}
            >
              SignUp
            </Button>
          </Box>

          {showSignUpBox ? <SignUp /> : <Login />}
        </Box>
      )}
    </Box>
  );
}

export default App;
