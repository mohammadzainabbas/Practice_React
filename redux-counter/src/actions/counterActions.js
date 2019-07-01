import { INCREMENT, DECREMENT } from "./../reducers/counterReducer";
export const Increment = () => {
  return {
    type: INCREMENT
  };
};
export const Decrement = () => {
  return {
    type: DECREMENT
  };
};
