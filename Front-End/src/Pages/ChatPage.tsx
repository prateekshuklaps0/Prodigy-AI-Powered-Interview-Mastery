import * as css from "../Styles/ChatPageStyles";
import { useContext } from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";

import {
  PiDotsThreeCircleThin as ThreeDots,
  // PiDotsThreeCircleFill as ThreeDots,
} from "react-icons/pi";

import { Context } from "../Data/Context";

const ChatPage = () => {
  const { userDetails } = useContext(Context);

  return (
    <Box css={css.Outer}>
      {/* Left Side */}
      <Box bg="bgB" css={css.LeftCont}>
        <Box bg="bgA" css={css.UserNameBox}>
          <Text>{`Hi!  ${userDetails?.name}`}</Text>
          <Image as={ThreeDots} />
        </Box>
      </Box>

      {/* Right Side */}
      <Box css={css.RightCont}>{/* <div id="testing"></div> */}</Box>
    </Box>
  );
};

export default ChatPage;
