import "./App.css";

import React, { Component } from "react";
import axios from "axios";

import NightButton from "./Components/button";

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({ players: res.data }));
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <NightButton />
        {this.state.players.map(people => (
          <div>
            <h1>{people.name}</h1>
            <h2>{people.country}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
