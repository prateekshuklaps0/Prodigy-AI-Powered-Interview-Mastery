import * as css from "../Styles/ChatPageStyles";
import { useContext, useState } from "react";
import {
  Box,
  Text,
  Image,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import { PiDotsNineBold as ThreeDots } from "react-icons/pi";

import { Context } from "../Data/Context";

const ChatPage = () => {
  const { userDetails } = useContext(Context);
  const [showLogOut, setShowLogOut] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [interviewType, setInterviewType] = useState("");

  return (
    <Box css={css.Outer}>
      {/* Left Side */}
      <Box bg="bgB" css={css.LeftCont}>
        {/* UserName */}
        <Box bg="bgA" color="textColor" css={css.UserNameBox}>
          <Text>{`Hi!  ${userDetails?.name}`}</Text>
          <Image
            onClick={() => setShowLogOut((prev) => !prev)}
            _hover={{ color: "hovertext" }}
            as={ThreeDots}
          />
        </Box>
        {/* Log Out */}
        <Center
          onClick={() => {
            console.log("Log Outed");
          }}
          bg="bgA"
          color="textColor"
          _hover={{ color: "hovertext" }}
          css={css.LogOutBtnCss(showLogOut)}
        >
          LogOut
        </Center>

        {/* Interview Type */}
        <Center
          bg="bgA"
          color="textColor"
          onClick={() => setShowOptions(true)}
          css={css.SelectBoxCss}
        >
          {interviewType
            ? `Interview Type : ${interviewType}`
            : "Select Interview Type ⏷"}
        </Center>
        <Box
          display={showOptions ? "static" : "none"}
          bg="bgA"
          color="textColor"
          css={css.InterviewTypeBox}
        >
          {InterviewOptions.map((item, ind) => (
            <Center
              bg={interviewType == item.value ? "bgB" : "bgA"}
              onClick={() => {
                setInterviewType(item.value);
                setShowOptions(false);
              }}
              css={css.TypesCss}
              key={item.name + ind}
            >
              {item.name}
            </Center>
          ))}
        </Box>
      </Box>

      {/************************  Right Side *************************/}
      <Box css={css.RightCont}>
        {/* <div id="testing"></div> */}

        <Box css={css.ParentContRight}></Box>
      </Box>
    </Box>
  );
};

export default ChatPage;

const InterviewOptions = [
  {
    name: "None",
    value: "",
  },
  {
    name: "MERN",
    value: "MERN",
  },
  {
    name: "Node",
    value: "Node",
  },
  {
    name: "Java",
    value: "Java",
  },
];
