import $ from "jquery";

export const UPDATE_USER = "updateUser";
export const SHOW_ERROR = "showError";

export const updateUser = newUser => {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  };
};

export const showError = () => {
  return {
    type: SHOW_ERROR,
    payload: {
      user: "Error"
    }
  };
};

export const apiRequest = () => {
  return dispatch => {
    $.ajax({
      url: "https://google.com",
      success() {
        console.log("Success");
      },
      error() {
        console.log("Error");
        dispatch(showError());
      }
    });
  };
};
