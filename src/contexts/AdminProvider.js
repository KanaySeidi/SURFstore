import axios from "axios";
import React from "react";
import { API } from "../helpers/const";

export const AdminContext = React.createContext();

const INIT_STATE = { products: null, productToEdit: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_TO_EDIT":
      return { ...state, productToEdit: action.payload };
    default:
      return state;
  }
};
const AdminProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, INIT_STATE);
  const addProduct = async (newProduct) => {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios(API);
      let action = {
        type: "GET_PRODUCTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductToEdit = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PRODUCT_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const saveEditedProduct = async (productEdit) => {
    try {
      await axios.patch(`${API}/${productEdit.id}`, productEdit);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        addProduct,
        getProducts,
        getProductToEdit,
        saveEditedProduct,
        deleteProduct,
        products: state.products,
        productToEdit: state.productToEdit,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
