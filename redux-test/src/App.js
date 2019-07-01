import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//Connect components to redux store
import { connect } from "react-redux";
//To bind actions to props
// import { bindActionCreators } from "redux";
//Actions
import { updateUser, apiRequest } from "./actions/userActions";

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.onApiRequest();
    }, 1500);
  }

  onUpdateUser = ({ target }) => {
    this.props.onUpdateUser(target.value);
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
          {/* <button onClick={this.onUpdateUser}>Update User</button> */}
          <input onChange={this.onUpdateUser} />
          <p>{this.props.user}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userAndComponentProps: `${state.user} ${props.app_component}`
  };
};

//Allow us to dispatch actions from our components easily (we don't need to use dispatch in components separately). We'll just call functions that automatically dispatch actions to the store
const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
};

// const mapActionsToProps = (dispatch, props) => {
//   return bindActionCreators({ onUpdateUser: updateUser }, dispatch);
// };

// const mergeProps = (
//   propsFromState, //Props which we return from mapStateToProps
//   propsFromDispatch, //Props which we return from mapActionsToProps
//   ownProps //Props that we pass in
// ) => {
//   console.log("Props from state", propsFromState);
//   console.log("Props from dispatch", propsFromDispatch);
//   console.log("Own props", ownProps);
//   return {};
// };

export default connect(
  mapStateToProps,
  mapActionsToProps
  // mergeProps
)(App);
