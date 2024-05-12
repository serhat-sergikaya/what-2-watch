interface Search{
    id:number
    title: string
    poster_path: string
}
const useSearch = (selectedGenre: Genre | null, selectedMedia: string) =>
    useData<Show>(
      "/discover/tv",
      {
        params: {
          with_genres: selectedGenre?.id,
        },
      },
      [selectedGenre, selectedMedia]
    );
}

export default useSearch