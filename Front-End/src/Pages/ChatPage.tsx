import * as css from "../Styles/ChatPageStyles";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useContext, useState, useEffect } from "react";
import {
  Box,
  Text,
  Image,
  Center,
  useToast,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import { PiDotsNineBold as ThreeDots } from "react-icons/pi";
import { HiMicrophone as MicIcon } from "react-icons/hi";
import { RiSendPlaneFill as SendIcon } from "react-icons/ri";

import { Context } from "../Data/Context";
import ChatBox from "../Components/ChatBox";

const ChatPage = () => {
  const toast = useToast();
  const { userDetails, responseContent, setResponseContent } =
    useContext(Context);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  }: any = useSpeechRecognition();
  const [showLogOut, setShowLogOut] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [interviewType, setInterviewType] = useState("");
  const [inpVal, setInpVal] = useState("");

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  // If Browser Doesn't Support this.
  if (!browserSupportsSpeechRecognition) {
    return (
      <Text bg="bgB" fontSize={["24px"]} textAlign="center" color="textColor">
        Your browser does not support this.
      </Text>
    );
  }

  // Transcript UseEffect
  useEffect(() => {
    setInpVal(transcript);
  }, [transcript]);

  // handle Mic Click
  const handleMicClick = () => {
    if (!listening) {
      toast({
        title: `Microphone : ON`,
        status: "success",
        position: "top",
        duration: 1000,
      });
      startListening();
    } else if (listening) {
      toast({
        title: `Microphone : OFF`,
        status: "info",
        position: "top",
        duration: 1000,
      });
      SpeechRecognition.stopListening();
      resetTranscript();
    }
  };

  // Submit Function
  const handleSubmit = () => {
    if (inpVal == "") {
      return toast({
        title: `Empty Response !`,
        position: "top",
        status: "error",
        duration: 2000,
      });
    }

    let chatDetails = {
      content: inpVal,
      // type: "userInput",
      type: "Response",
    };
    setResponseContent((prev: any) => [...prev, chatDetails]);

    setInpVal("");
  };

  return (
    <Box css={css.Outer}>
      {/* Left Side */}
      <Box bg="bgB" css={css.LeftCont}>
        {/* UserName */}
        <Box bg="bgA" color="textColor" css={css.UserNameBox}>
          <Text>{`Hi! ${userDetails}`}</Text>
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
        <Box css={css.ParentContRight}>
          {/* Chats */}
          <Box>
            {responseContent.map((item: any, ind: any) => (
              <ChatBox {...item} key={item.content + ind} />
            ))}
          </Box>

          {/* Input Component */}

          <Box>
            <Box>Start</Box>
            <Box bg="bgB" css={css.InpContCss}>
              <InputGroup>
                <InputLeftElement
                  onClick={handleMicClick}
                  color={listening ? "greenShade" : "textcolor"}
                  css={css.InputIconsCss}
                >
                  <MicIcon />
                </InputLeftElement>
                <Input
                  color="hovertext"
                  _placeholder={{ color: "hovertext" }}
                  focusBorderColor="transparent"
                  value={inpVal}
                  onChange={(e) => setInpVal(e.target.value)}
                  placeholder="Your Answer"
                />
                <InputRightElement
                  onClick={handleSubmit}
                  color="hovertext"
                  _hover={{ color: "greenShade" }}
                  css={css.InputIconsCss}
                >
                  <SendIcon />
                </InputRightElement>
              </InputGroup>
            </Box>
          </Box>
        </Box>
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
