import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface MediaQuery {
  selectedGenreId?: number;
  selectedMedia?: string;
  searchText?: string;
  sortOrder?: string;
}

interface MediaQueryStore {
  mediaQuery: MediaQuery;
  setSelectedGenreId: (selectedGenreId: number) => void;
  setSelectedMedia: (selectedMedia: string) => void;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useMediaQueryStore = create<MediaQueryStore>((set) => ({
  mediaQuery: {},
  setSelectedGenreId: (selectedGenreId: number) =>
    set((store) => ({ mediaQuery: { ...store.mediaQuery, selectedGenreId } })),
  setSelectedMedia: (selectedMedia: string) =>
    set(() => ({ mediaQuery: { selectedMedia } })),
  setSearchText: (searchText: string) =>
    set((store) => ({ mediaQuery: { ...store.mediaQuery, searchText } })),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({
      mediaQuery: { ...store.mediaQuery, sortOrder },
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Media Query Store", useMediaQueryStore);

export default useMediaQueryStore;
