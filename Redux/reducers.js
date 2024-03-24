// reducers.js
const initialState = {
<<<<<<< HEAD
  favorites: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const productId = action.payload;
      const isFavorite = state.favorites.includes(productId);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter((id) => id !== productId)
          : [...state.favorites, productId],
      };
    default:
      return state;
  }
};
=======
    favorites: [],
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_FAVORITE':
        const productId = action.payload;
        const isFavorite = state.favorites.includes(productId);
        return {
          ...state,
          favorites: isFavorite
            ? state.favorites.filter((id) => id !== productId)
            : [...state.favorites, productId],
        };
      default:
        return state;
    }
  };
  
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
