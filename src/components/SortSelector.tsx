import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import useMediaQueryStore from "../store";

const sortOrders = [
  { value: "popularity.desc", label: "Popularity" },
  { value: "primary_release_date.desc", label: "Release date movie" },
  { value: "first_air_date.desc", label: "Release date series" },
  { value: "vote_average.desc", label: "Average rating" },
];

const SortSelector = () => {
  const selectedMedia = useMediaQueryStore((s) => s.mediaQuery.selectedMedia);
  const sortOrder = useMediaQueryStore((s) => s.mediaQuery.sortOrder);
  const setSortOrder = useMediaQueryStore((s) => s.setSortOrder);

  const releaseDateQuery =
    selectedMedia === "TV Shows"
      ? "first_air_date.desc"
      : "primary_release_date.desc";

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Sort by: {currentSortOrder?.label || "Popularity"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setSortOrder("popularity.desc")} key={1}>
          Popularity
        </MenuItem>
        <MenuItem onClick={() => setSortOrder("vote_average.desc")} key={2}>
          Average rating
        </MenuItem>
        <MenuItem onClick={() => setSortOrder(releaseDateQuery)} key={3}>
          Release date
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
