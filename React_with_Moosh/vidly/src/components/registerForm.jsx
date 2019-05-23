import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .email({ minDomainSegments: 2 })
      .required()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  onSubmit = () => {
    console.log("Register Form Submitted.!");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.onFormSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderFormButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
