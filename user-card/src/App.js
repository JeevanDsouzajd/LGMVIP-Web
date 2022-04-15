import Users from "./components/card";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_data: [],
      loading: true,
    };
    this.displayUsers = this.displayUsers.bind(this);
  }

  displayUsers() {
    document.getElementById("main").style.display = "flex";
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          user_data: users.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-ligh rounded m-3">
          <div className="container-fluid">
            <h3>USER CARD APP</h3>
            <div className="btn">
              <button onClick={this.displayUsers} users={this.state.user_data}>
                Get Users
              </button>
            </div>
          </div>
        </nav>
        <Users loading={this.state.loading} users={this.state.user_data} />
      </>
    );
  }
}

export default App;
