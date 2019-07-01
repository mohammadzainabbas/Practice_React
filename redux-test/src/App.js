import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//Connect components to redux store
import { connect } from "react-redux";

//Actions
import { updateUser } from "./actions/userActions";

class App extends Component {
  onUpdateUser = () => {
    this.props.onUpdateUser("Sammy");
  };
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <button onClick={this.onUpdateUser}>Update User</button>
          <p>{this.props.user}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

//Allow us to dispatch actions from our components easily (we don't need to use dispatch in components separately). We'll just call functions that automatically dispatch actions to the store
const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
