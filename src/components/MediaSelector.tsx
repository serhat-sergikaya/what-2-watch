import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import useMediaQueryStore from "../store";

const MediaSelector = () => {
  const selectedMedia = useMediaQueryStore((s) => s.mediaQuery.selectedMedia);
  const setSelectedMedia = useMediaQueryStore((s) => s.setSelectedMedia);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {selectedMedia ? selectedMedia : "Movies"}
      </MenuButton>
      <MenuList>
        <MenuItem key="1" onClick={() => setSelectedMedia("Movies")}>
          Movies
        </MenuItem>
        <MenuItem key="2" onClick={() => setSelectedMedia("TV Shows")}>
          TV Shows
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MediaSelector;
