import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import useMediaQueryStore from "../store";

const SearchInput = () => {
  const setSearchText = useMediaQueryStore((s) => s.setSearchText);

  const handleChange = (searchText: string) => {
    setSearchText(searchText);
  };
  return (
    <InputGroup>
      <InputLeftElement _groupHover={{ color: "black" }}>
        <FaSearch />
      </InputLeftElement>
      <Input
        _groupHover={{ _placeholder: { color: "black" }, bg: "white" }}
        _focus={{
          _placeholder: { color: "black" },
          bg: "white",
          color: "black",
        }}
        borderRadius={20}
        placeholder="Search Movies/TV Shows..."
        onChange={(e) => handleChange(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
