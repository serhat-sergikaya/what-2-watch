import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import MediaGrid from "./components/MediaGrid";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import MediaSelector from "./components/MediaSelector";
import MainContainer from "./components/MainContainer";
import SelectorContainer from "./components/SelectorContainer";
import SortSelector from "./components/SortSelector";
import MediaHeading from "./components/MediaHeading";

export interface MediaQuery {
  selectedGenreId?: number;
  selectedMedia: string;
  searchInput: string;
  sortValue: string;
}

function App() {
  const [mediaQuery, setMediaQuery] = useState<MediaQuery>({} as MediaQuery);

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
        <NavBar
          onSearch={(searchInput) =>
            setMediaQuery({ ...mediaQuery, searchInput })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenreId={mediaQuery.selectedGenreId}
            onGenreSelect={(selectedGenreId) =>
              setMediaQuery({ ...mediaQuery, selectedGenreId })
            }
            selectedMedia={mediaQuery.selectedMedia}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <MainContainer>
          <MediaHeading
            selectedGenreId={mediaQuery.selectedGenreId}
            selectedMedia={mediaQuery.selectedMedia}
          />
          <SelectorContainer>
            <MediaSelector
              onSelectMediaType={(selectedMedia) =>
                setMediaQuery({ ...mediaQuery, selectedMedia })
              }
              selectedMedia={mediaQuery.selectedMedia}
            />
            <SortSelector
              sortSelected={(sortValue) =>
                setMediaQuery({ ...mediaQuery, sortValue })
              }
              selectedMedia={mediaQuery.selectedMedia}
              sortValue={mediaQuery.sortValue}
            />
          </SelectorContainer>
          <MediaGrid mediaQuery={mediaQuery} />
        </MainContainer>
      </GridItem>
    </Grid>
  );
}

export default App;
