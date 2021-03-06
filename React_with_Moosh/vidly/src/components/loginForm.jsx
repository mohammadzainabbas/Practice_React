import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  // schema = {
  //   username: Joi.string()
  //     .alphanum()
  //     .min(3)
  //     .max(30)
  //     .required(),
  //   password: Joi.string()
  //     .regex(/^[a-zA-Z0-9]{3,30}$/)
  //     .required()
  // };

  onSubmit = () => {
    console.log("Login form submitted.!");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onFormSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderFormButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
