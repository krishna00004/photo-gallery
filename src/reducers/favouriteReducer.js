export const initialState = {
  favourites: JSON.parse(localStorage.getItem("favourites")) || []
};

export function favouriteReducer(state, action) {

  if (action.type === "TOGGLE_FAVOURITE") {

    const isExist = state.favourites.some(
      item => item.id === action.payload.id
    );

    const updatedFavourites = isExist
      ? state.favourites.filter(item => item.id !== action.payload.id)
      : [...state.favourites, action.payload];

    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));

    return { favourites: updatedFavourites };
  }

  return state;
}