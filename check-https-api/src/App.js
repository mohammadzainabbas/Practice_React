import React, { Component } from "react";
import config from "./config.json";
import http from "./services/httpService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    // const promise = http.get("http://jsonplaceholder.typicode.com/posts");
    // const response = await promise;

    // console.log(promise);
    // console.log(response);

    const { data: posts } = await http.get(config.apiEndPoint);
    this.setState({
      posts
    });
    console.log(posts);
  }

  render() {
    const { status } = this.state.posts;
    return <React.Fragment>Service is {status}</React.Fragment>;
  }
}

export default App;
