export const INCREMENT = "Increment";
export const DECREMENT = "Decrement";

const initialState = {
  counterValue: 0
};

const counterReducer = (state = initialState, { type }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, counterValue: state.counterValue + 1 };
    case DECREMENT:
      return { ...state, counterValue: state.counterValue - 1 };
    default:
      return state;
  }
};

export default counterReducer;
