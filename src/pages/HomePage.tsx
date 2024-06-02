import { Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import MainContainer from "../components/MainContainer";
import MediaGrid from "../components/MediaGrid";
import MediaHeading from "../components/MediaHeading";
import MediaSelector from "../components/MediaSelector";
import NavBar from "../components/NavBar";
import SelectorContainer from "../components/SelectorContainer";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "240px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <MainContainer>
          <MediaHeading />
          <SelectorContainer>
            <MediaSelector />
            <SortSelector />
          </SelectorContainer>
          <MediaGrid />
        </MainContainer>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
