import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const sortOrders = [
  { value: "popularity.desc", label: "Popularity" },
  { value: "primary_release_date.desc", label: "Release date movie" },
  { value: "first_air_date.desc", label: "Release date series" },
  { value: "vote_average.desc", label: "Average rating" },
];
interface Props {
  sortSelected: (sortValue: string) => void;
  selectedMedia: string;
  sortValue: string;
}

const SortSelector = ({ sortSelected, selectedMedia, sortValue }: Props) => {
  const releaseDateQuery =
    selectedMedia === "TV Shows"
      ? "first_air_date.desc"
      : "primary_release_date.desc";

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortValue
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Sort by: {currentSortOrder?.label || "Popularity"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => sortSelected("popularity.desc")} key={1}>
          Popularity
        </MenuItem>
        <MenuItem onClick={() => sortSelected("vote_average.desc")} key={1}>
          Average rating
        </MenuItem>
        <MenuItem onClick={() => sortSelected(releaseDateQuery)} key={1}>
          Release date
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
