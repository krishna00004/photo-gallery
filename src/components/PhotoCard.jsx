export default function PhotoCard({ photo, dispatch, favourites }) {

  const isFav = favourites.some((item) => item.id === photo.id);

  return (
    <div className="bg-white shadow rounded p-3">

      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 object-cover rounded"
      />

      <div className="flex justify-between items-center mt-2">

        <p className="text-sm font-semibold">
          {photo.author}
        </p>

        <button
          onClick={() =>
            dispatch({ type: "TOGGLE_FAVOURITE", payload: photo })
          }
        >
          {isFav ? "❤️" : "🤍"}
        </button>

      </div>
    </div>
  );
}