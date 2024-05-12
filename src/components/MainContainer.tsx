import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return <Box padding={5}>{children}</Box>;
};

export default MainContainer;
