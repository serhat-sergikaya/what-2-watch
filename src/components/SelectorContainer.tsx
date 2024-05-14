import { HStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const SelectorContainer = ({ children }: Props) => {
  return (
    <HStack marginY={8} spacing={5}>
      {children}
    </HStack>
  );
};

export default SelectorContainer;
