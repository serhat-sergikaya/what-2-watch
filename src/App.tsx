import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import MediaGrid from "./components/MediaGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">NAV</GridItem>
      <Show above="lg">
        <GridItem area="aside">aside</GridItem>
      </Show>
      <GridItem area="main">
        <MediaGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
