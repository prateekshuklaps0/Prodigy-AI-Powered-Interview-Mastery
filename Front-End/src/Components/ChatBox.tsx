//import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ChatBox = ({ content, type }: any) => {
  return (
    <Box
      bg={type == "userInput" ? "bgA" : "bgB"}
      color={type == "userInput" ? "textColor" : "hovertext"}
      fontSize={type == "userInput" ? ["16px"] : ["18px"]}
      mb={type == "userInput" ? ["20px"] : ["10px"]}
      padding={["15px"]}
      borderRadius={["10px"]}
    >
      <Text>{content}</Text>
    </Box>
  );
};

export default ChatBox;
