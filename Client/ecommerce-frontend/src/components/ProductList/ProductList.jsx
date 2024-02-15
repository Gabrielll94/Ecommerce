import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProductos } from "../../Redux/Reducer/Actions/Product.action";

const productListContainer = ({
  productos,
  loading,
  fetchProductos,
  error,
}) => {
  useEffect(() => {
    fetchProductos();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div> Error al cargar los productos...</div>;
  }

  return <ProductList products={productos} />;
};

const mapStateToProps = (state) => {
  return {
    productos: state.productoReducer.productos,
    loading: state.productoReducer.loading,
    error: state.productoReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductos: () => dispatch(fetchProductos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(productListContainer);
