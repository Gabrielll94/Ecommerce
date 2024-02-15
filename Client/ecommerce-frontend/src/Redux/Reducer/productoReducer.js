const initialState = {
  producto: [],
  loading: false,
  error: null,
};

const productoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTOS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_PRODUCTOS_SUCCES":
      return {
        ...state,
        loading: false,
        productos: action.payload,
      };
    case "FETCH_PRODUCTOS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productoReducer;
