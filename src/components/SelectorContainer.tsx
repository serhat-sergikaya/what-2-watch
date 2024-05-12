import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const SelectorContainer = ({ children }: Props) => {
  return <Box marginY={5}>{children}</Box>;
};

export default SelectorContainer;
