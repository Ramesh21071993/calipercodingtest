import { ADD, UPDATE, DELETE } from "./actionType";

export const initialState = {
  products: [
    {
      name: "Test Product",
      price: "10$",
      description: "Test description"
    }
  ]
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        products: [...state.products, payload]
      };
    case UPDATE:
      return {
        ...state,
        products: state.products.map((record, index) =>
          index === payload.index ? payload.data : record
        )
      };
    case DELETE:
      return {
        ...state,
        products: state.products.filter((element, index) => index !== payload)
      };
    default:
      return state;
  }
};

export default productsReducer;
