import * as css from "../Styles/ChatPageStyles";
import axios from "axios";
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
  Spinner,
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

export const ChatPage = () => {
  const toast = useToast();
  const { API_Url, token, userDetails, responseContent, setResponseContent } =
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
  const [btnText, setBtnText] = useState("Start");
  const [isLoading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
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
        position: "top-right",
        duration: 1000,
      });
      startListening();
    } else if (listening) {
      toast({
        title: `Microphone : OFF`,
        status: "info",
        position: "top-right",
        duration: 1000,
      });
      SpeechRecognition.stopListening();
    }
  };

  // Change Button Type
  useEffect(() => {
    setBtnText("Start");
  }, [interviewType]);

  // handle Start and Next Question Button

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ subject: interviewType }),
  };

  const handleChatBtn = () => {
    setLoading(true);
    fetch(`${API_Url}/interview/questions`, requestOptions)
  .then((response) => {
    // console.log(response)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data)
    let firstQuestion = {
      content: data.question.choices[0].message.content,
      type: "Response",
    };
    setResponseContent((prev:any) => [...prev, firstQuestion]);
    setQuestion(firstQuestion.content);
    setBtnText("Next Question");
    setLoading(false);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
    toast({
      title: "Something Went Wrong",
      status: "error",
      position: "top-right",
      duration: 2000,
    });
    setLoading(false);
  });


    // setLoading(true);
    // axios({
    //   url: `${API_Url}/questions`,
    //   method: "post",
    //   data: {
    //     subject: interviewType,
    //   },
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    //   .then((res) => {
    //     let firstQuestion = {
    //       content: res.data.question.choices[0].message.content,
    //       type: "Response",
    //     };
    //     setResponseContent((prev: any) => [...prev, firstQuestion]);
    //     setQuestion(firstQuestion?.content);
    //     setBtnText("Next Question");
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast({
    //       title: `Something Went Wrong`,
    //       status: "error",
    //       position: "top-right",
    //       duration: 2000,
    //     });
    //     setLoading(false);
    //   });
  };

  // Submit Function
  const handleSubmit = () => {
    if (interviewType == "") {
      setInpVal("");
      return toast({
        title: `Select the Interview Type first !`,
        status: "info",
        position: "top-right",
        duration: 2000,
      });
    }
    if (btnText == "Start") {
      setInpVal("");
      return toast({
        title: `Click the Start button !`,
        status: "info",
        position: "top-right",
        duration: 2000,
      });
    }
    if (inpVal == "") {
      return toast({
        title: `Empty Response !`,
        status: "error",
        position: "top-right",
        duration: 2000,
      });
    }

    let userInput = {
      content: inpVal,
      type: "userInput",
    };
    setResponseContent((prev: any) => [...prev, userInput]);
    setInpVal("");

    setLoading(true);
    axios({
      url: `${API_Url}/interview/answer`,
      method: "post",
      data: {
        subject: interviewType,
        question,
        answer: inpVal,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        let responseFeedback = {
          content: res.data,
          type: "Response",
        };
        setResponseContent((prev: any) => [...prev, responseFeedback]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: `Something Went Wrong`,
          status: "error",
          position: "top-right",
          duration: 2000,
        });
        setLoading(false);
      });
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
          {/* Start & Next Question Btn */}
          {interviewType != "" ? (
            <Center
              onClick={handleChatBtn}
              bg="bgB"
              color="hovertext"
              css={css.BtnCss}
            >
              {isLoading ? <Spinner size={["sm"]} /> : btnText}
            </Center>
          ) : (
            ""
          )}

          {/* Chats */}
          <Box mt={["20px"]}>
            {responseContent.map((item: any, ind: any) => (
              <ChatBox {...item} key={item.content + ind} />
            ))}
          </Box>

          {/* Input Component */}
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
  );
};

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
