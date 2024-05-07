import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="crimson">
        NAV
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="royalblue">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="gold">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
