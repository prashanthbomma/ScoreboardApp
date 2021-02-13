import React, { Component} from 'react';

import Header from './Header';
import Player from './Player';
import Counter from './Counter';


class App extends Component {
  state = {
    players: [
      {
        name: "Prashanth",
        id: 1,
      },
      {
        name: "Mahesh",
        id: 2,
      },
      {
        name: "Raj",
        id: 3,
      },
      {
        name: "Harish",
        id: 4,
      },
    ],
  };

  deletePlayer = (id) => {
    return this.setState((prevState) => ({
      players: prevState.players.filter((p) => p.id !== id),
    }));
  };
  render() {
    return (
      <div className="scoreboard">
        <Header totalPlayers={this.state.players.length} />
        {this.state.players.map((player) => (
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.deletePlayer}
          />
        ))}
      </div>
    );
  }
}
export default App;
