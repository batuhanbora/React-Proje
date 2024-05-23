const defaultState = {
  showHideCart: false,
    price: { min: "", max: "" },
  brands: [],
  category: "",
  products: []
}

export const showHideCart = (state = defaultState, action) => {
  switch (state.showHideCart) {
    case true:
      return {...state,
        showHideCart: false,
      };
    case false:
      return {
        ...state,
        showHideCart: true,
      };
    default:
      return state
  }
};

// const initialState = {
//   price: { min: "", max: "" },
//   brands: [],
//   category: "",
// };

// const defaultCartState = {
//   products:[]
// };

export const addToCart = (state = defaultState, action)=>{
  switch (action.type) {
    case "ADD_TO_CART":
        return {
          ...state,
          products: [...state.products, action.payload]
        }
    default:
      return state;
  }
}
