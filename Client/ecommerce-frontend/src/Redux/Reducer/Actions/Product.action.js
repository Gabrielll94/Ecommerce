import axios from "axios";

export const fetchProductosRequest = () => {
  return {
    type: "FETCH_PRODUCTOS_REQUEST",
  };
};

export const fetchProductosSuccess = (productos) => {
  return {
    type: "FETCH_PRODUCTOS_SUCCESS",
    payload: productos,
  };
};

export const fetchProductosFail = () => {
  return {
    type: "FETCH_PRODUCTOS_FAILURE",
    payload: error,
  };
};

export const fetchProductos = () => {
  return (dispatch) => {
    dispatch(fetchProductosRequest());
    axios
      .get("api/producto")
      .then((response) => {
        const productos = response.data;
        dispatch(fetchProductosSuccess(productos));
      })
      .catch(() => {
        dispatch(fetchProductosFail(error.message));
      });
  };
};
