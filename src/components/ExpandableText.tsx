import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 340;

  const sum = expanded ? children : children?.substring(0, 1800) + "...";

  if (children?.length <= 1800) return <Text>{children}</Text>;
  return (
    <Text>
      {sum}
      <Button
        size="xs"
        fontWeight="bold"
        marginLeft={1}
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Load More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
