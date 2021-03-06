import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
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
  }
  handleAdd = async () => {
    const obj = {
      title: "a",
      body: "b"
    };

    const { data: post } = await http.post(config.apiEndPoint, obj);

    console.log(post);
    const posts = [post, ...this.state.posts];
    this.setState({
      posts
    });
  };

  handleUpdate = async post => {
    const originalPosts = this.state.posts;

    post.title = "Upated Post";

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({
      posts
    });

    try {
      await http.patch(`${config.apiEndPoint}/${post.id}`, {
        title: post.title
      });
    } catch (ex) {
      alert(
        "Something failed while updating the post. Try again in a short while.!"
      );
      this.setState({
        posts: originalPosts
      });
    }
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({
      posts
    });
    try {
      // await http.delete(config.apiEndPoint + "/9898" + post.id);
      await http.delete(`s${config.apiEndPoint}/${post.id}`);
      // await http.delete(config.apiEndPoint + "/9999");
    } catch (ex) {
      /*
      Type of errors:
      1- Expected Errors: ()
      - Errors that config.apiEndpoint predict and returns
      For e.g:
      - If we try to delete a post with an invalid id, the server will return a respond with status code 404 aka Error 404 (not found)
      - If we try to submit a form with an invalid data, on the server the validation fails and we'll get Error 400 (bad request) from the server

      In HTTP Protocol, we call these 400 range errors 'CLIENT ERRORS' coz these error occurs when client did something wrong.

      --We should display a specific error message to client 
      For e.g: Hey you have already deleted the post. Can't delete again. OR this post is not found. 
      OR display the invalid data entry and ask for correction.

      2- Unexpected Errors:
      - Errors that shouldn't happened under normal circumstances.

      For e.g:
      -Network is down.
      -Server is down.
      -Database is down.
      -Backend bug

      --We should log these kinda errors. So, we can look them in future and find out what happened.
      --Display a generic and friendly message to the client.
      
      HOW TO HANDLE ERRORS:
      1- Check if the error is expected or unexpected:
      Exception ex has two properties we can use:
      ex.response -> Set if we get successfully response from server. If the network is down or server crashes, we won't get a response and this property will be null
      ex.request -> Set if we can successfully submit a request to the server. Otherwise, it's going to be null
      
      */
      //For expected error -> 404
      if (ex.response && ex.response.status === 404) {
        alert("This post is already been deleted.");
      }
      this.setState({
        posts: originalPosts
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
