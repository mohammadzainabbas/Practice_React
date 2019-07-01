export const SIGN_IN = "Sign In";

const initialState = {
  loggedIn: false
};

const LoggedInReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return !payload.loggedIn;
    default:
      return state;
  }
};

export default LoggedInReducer;
