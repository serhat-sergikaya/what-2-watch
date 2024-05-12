import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  onSelectMediaType: (media: string) => void;
  selectedMedia: string;
}

const MediaSelector = ({ onSelectMediaType, selectedMedia }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {selectedMedia ? selectedMedia : "Movies"}
      </MenuButton>
      <MenuList>
        <MenuItem key="1" onClick={() => onSelectMediaType("Movies")}>
          Movies
        </MenuItem>
        <MenuItem key="2" onClick={() => onSelectMediaType("TV Shows")}>
          TV Shows
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MediaSelector;
