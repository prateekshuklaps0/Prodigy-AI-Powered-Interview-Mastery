import * as css from "../Styles/ChatPageStyles";
import { useContext, useState } from "react";
import {
  Box,
  Text,
  Image,
  ScaleFade,
  Center,
  useDisclosure,
} from "@chakra-ui/react";

import {
  PiDotsThreeCircleThin as ThreeDots,
  // PiDotsThreeCircleFill as ThreeDots,
} from "react-icons/pi";

import { Context } from "../Data/Context";

const ChatPage = () => {
  const { userDetails } = useContext(Context);
  const { isOpen, onToggle } = useDisclosure();
  const [interviewType, setInterviewType] = useState("");

  return (
    <Box css={css.Outer}>
      {/* Left Side */}
      <Box bg="bgB" css={css.LeftCont}>
        {/* UserName */}
        <Box bg="bgA" color="textColor" css={css.UserNameBox}>
          <Text>{`Hi!  ${userDetails?.name}`}</Text>
          <Image _hover={{ color: "#e9c4ff" }} as={ThreeDots} />
        </Box>

        {/* Interview Type */}
        <Center
          bg="bgA"
          color="textColor"
          onClick={onToggle}
          css={css.SelectBoxCss}
        >
          {interviewType
            ? `Interview Type : ${interviewType}`
            : "Select Interview Type ⏷"}
        </Center>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Box bg="bgA" color="textColor" css={css.InterviewTypeBox}>
            {InterviewOptions.map((item, ind) => (
              <Center
                bg={interviewType == item.value ? "bgB" : "bgA"}
                onClick={() => {
                  setInterviewType(item.value);
                  onToggle();
                }}
                css={css.TypesCss}
                key={item.name + ind}
              >
                {item.name}
              </Center>
            ))}
          </Box>
        </ScaleFade>
      </Box>

      {/************************  Right Side *************************/}
      <Box css={css.RightCont}>
        {/* <div id="testing"></div> */}

        {interviewType}
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
