import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearchValueEntered: (searchText: string) => void;
}

const SearchInput = ({ onSearchValueEntered }: Props) => {
  const [input, setInput] = useState("");

  const handleChange = (searchText: string) => {
    onSearchValueEntered(searchText);
    console.log(searchText);
  };
  return (
    <InputGroup>
      <Box></Box>
      <InputLeftElement>
        <FaSearch />
      </InputLeftElement>
      <Input
        bg={"#303030"}
        borderRadius={20}
        placeholder="Search Movies/TV Shows..."
        onChange={(e) => handleChange(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
