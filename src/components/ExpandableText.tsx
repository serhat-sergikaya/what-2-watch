import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 1800;

  const sum = expanded ? children : children?.substring(0, limit) + "...";

  if (children?.length <= limit) return <Text>{children}</Text>;
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
