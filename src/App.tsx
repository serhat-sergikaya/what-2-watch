import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import GenreList from "./components/GenreList";
import MainContainer from "./components/MainContainer";
import MediaGrid from "./components/MediaGrid";
import MediaHeading from "./components/MediaHeading";
import MediaSelector from "./components/MediaSelector";
import NavBar from "./components/NavBar";
import SelectorContainer from "./components/SelectorContainer";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
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
}

export default App;
