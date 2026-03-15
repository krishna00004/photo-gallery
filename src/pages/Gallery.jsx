import { useState, useReducer, useMemo, useCallback } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouriteReducer, initialState } from "../reducers/favouriteReducer";
import PhotoCard from "../components/PhotoCard";
import SearchBar from "../components/SearchBar";

export default function Gallery() {

  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [state, dispatch] = useReducer(
    favouriteReducer,
    initialState
  );

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {

    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );

  }, [photos, search]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (error) return <p className="text-center mt-10">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">

      <SearchBar
        search={search}
        handleSearch={handleSearch}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            dispatch={dispatch}
            favourites={state.favourites}
          />
        ))}

      </div>
    </div>
  );
}