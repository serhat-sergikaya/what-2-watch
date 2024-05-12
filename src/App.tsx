import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import MediaGrid from "./components/MediaGrid";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import MediaSelector from "./components/MediaSelector";
import MainContainer from "./components/MainContainer";
import SelectorContainer from "./components/SelectorContainer";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedMedia, setSelectedMedia] = useState("");
  const [searchInput, setSearchInput] = useState("");

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
        <NavBar onSearch={(searchText) => setSearchInput(searchText)} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={selectedGenre}
            onGenreSelect={(genre) => setSelectedGenre(genre)}
            selectedMedia={selectedMedia}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <MainContainer>
          <SelectorContainer>
            <MediaSelector
              onSelectMediaType={(media) => setSelectedMedia(media)}
              selectedMedia={selectedMedia}
            />
          </SelectorContainer>
          <MediaGrid
            selectedGenre={selectedGenre}
            selectedMedia={selectedMedia}
          />
        </MainContainer>
      </GridItem>
    </Grid>
  );
}

export default App;
