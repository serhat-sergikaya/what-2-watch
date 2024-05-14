import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import MediaGrid from "./components/MediaGrid";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import { Genre } from "./hooks/useGenres";
import MediaSelector from "./components/MediaSelector";
import MainContainer from "./components/MainContainer";
import SelectorContainer from "./components/SelectorContainer";
import SortSelector from "./components/SortSelector";
import MediaHeading from "./components/MediaHeading";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedMedia, setSelectedMedia] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sortValue, setSortValue] = useState("");

  useEffect(() => {
    setSelectedGenre(null);
  }, [selectedMedia]);

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
          <MediaHeading
            selectedGenre={selectedGenre}
            selectedMedia={selectedMedia}
          />
          <SelectorContainer>
            <MediaSelector
              onSelectMediaType={(media) => setSelectedMedia(media)}
              selectedMedia={selectedMedia}
            />
            <SortSelector
              sortSelected={(sortvalue) => setSortValue(sortvalue)}
              selectedMedia={selectedMedia}
              sortValue={sortValue}
            />
          </SelectorContainer>
          <MediaGrid
            selectedGenre={selectedGenre}
            selectedMedia={selectedMedia}
            searchInput={searchInput}
            sortValue={sortValue}
          />
        </MainContainer>
      </GridItem>
    </Grid>
  );
}

export default App;
