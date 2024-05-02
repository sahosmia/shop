
type State = number[];

 type Action =
  | { type: "ADD_CART"; id: number }
  | { type: "DELETE_CART"; id: number };


export const cartReducer = (state: State, action: Action) : State => {

  switch (action.type) {
    case "ADD_CART":
      return [...state, action.id];
    case "DELETE_CART":
      return state.filter((item) => item !== action.id);
    default:
      throw new Error("Unsupported action type");
  }

};
