import React, { Component } from "react";

import Header from "./Header";
import Player from "./Player";
import Counter from "./Counter";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Prashanth",
        score: 0,
        id: 1,
      },
      {
        name: "Mahesh",
        score: 0,
        id: 2,
      },
      {
        name: "Raj",
        score: 0,
        id: 3,
      },
      {
        name: "Harish",
        score: 0,
        id: 4,
      },
    ],
  };

  prevId = 4;
  handleScoreUpdate = (index, delta) => {
    console.log(delta);
    this.setState((prevState) => {
      return {
        score: prevState.players[index].score += delta,
      };
    });
  };
  handleRemovePlayer = (id) => {
    return this.setState((prevState) => ({
      players: prevState.players.filter((p) => p.id !== id),
    }));
  };
  addPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevId += 1),
          },
        ],
      };
    });
  };
  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            id={player.id}
            index={index}
            score={player.score}
            key={player.id.toString()}
            handleRemovePlayer={this.handleRemovePlayer}
            handleScoreUpdate={this.handleScoreUpdate}
          />
        ))}
        <AddPlayerForm addPlayer={this.addPlayer} />
      </div>
    );
  }
}
export default App;
