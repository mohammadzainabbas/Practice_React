import React, { Component } from "react";

class NotFound extends Component {
  goHome = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Page not found</h1>
        <button
          onClick={this.goHome}
          style={{ marginTop: 25 }}
          className="btn btn-sm btn-outline-dark"
        >
          Go to home
        </button>
      </div>
    );
  }
}

export default NotFound;
