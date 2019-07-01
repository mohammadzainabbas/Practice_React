import $ from "jquery";

export const UPDATE_USER = "updateUser";

export const updateUser = newUser => {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
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
      }
    });
  };
};
