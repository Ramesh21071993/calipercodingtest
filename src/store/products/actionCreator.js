import { ADD, UPDATE, DELETE } from "./actionType";

export const addProducts = data => {
  return function(dispatch) {
    dispatch(addProductToList(data));
    return Promise.resolve({ status: true, msg: "Update Success" });
  };
};

export const updateProducts = (data, index) => {
  return function(dispatch) {
    dispatch(
      updateProductInList({
        data: data,
        index: index
      })
    );
    return Promise.resolve({ status: true, msg: "Update Success" });
  };
};

export const removeProduct = data => {
  return function(dispatch) {
    dispatch(removeProductFromList(data));
    return Promise.resolve({ status: true, msg: "Update Success" });
  };
};

export const addProductToList = payload => ({ type: ADD, payload });
export const updateProductInList = payload => ({ type: UPDATE, payload });
export const removeProductFromList = payload => ({ type: DELETE, payload });
