import { Cart_Reducer_Action_Type, CartReducerAction } from "../types";

type State = number[];
// type Action = { type: "ADD_CART", id: number } | { type: "DELETE_CART"; id: number };

export const cartReducer = (state: State, action: CartReducerAction) : State => {

  switch (action.type) {
    case Cart_Reducer_Action_Type.ADD_CART:
      return [...state, action.id];
    case Cart_Reducer_Action_Type.DELETE_CART:
      return state.filter((item) => item !== action.id);
    default:
      throw new Error("Unsupported action type");
  }

};
