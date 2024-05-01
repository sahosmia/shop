type State = number[];
type Action = { type: "addCart", id: number } | { type: "deleteCart"; id: number };

export const cartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "addCart":
      return [...state, action.id];
    case "deleteCart":
      return state.filter((item) => item !== action.id);
    default:
      throw new Error("Unsupported action type");
  }
};
