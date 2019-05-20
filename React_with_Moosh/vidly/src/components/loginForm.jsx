import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };

  validate = () => {
    const { username, password } = this.state.account;
    const errors = {};

    if (username.trim() === "") errors.username = "Username is required.!";
    if (password.trim() === "") errors.password = "Password is required.!";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  onFieldChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({
      account
    });
  };
  onFormSubmit = e => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({
      errors
    });
    if (errors) return;

    console.log("Login form submitted.!");
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onFormSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.onFieldChange}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.onFieldChange}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
