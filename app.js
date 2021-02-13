const Header = (props) => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
  }
class Counter extends React.Component{
    state ={
        score:0
    };
    incrementScore = () => {
        this.setState(prevState => ({score:prevState.score+1}));
    }
    decrementScore = () => {
        this.setState(prevState => ({score:prevState.score-1}));
    }
    render(){
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}>+</button>
            </div>
        );
    }
}
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={()=>props.removePlayer(props.id)}>✖</button>
            {props.name}</span>
            <Counter />
        </div>
    );
}
class App extends React.Component {
    state = {
        players: [
          {
            name: "Prashanth",
            id: 1
          },
          {
            name: "Mahesh",
            id: 2
          },
          {
            name: "Raj",
            id: 3
          },
          {
            name: "Harish",
            id: 4
          }
        ]
      };

      deletePlayer = (id) => {
          return (
              this.setState(prevState=>({players:prevState.players.filter(p => p.id!==id)}))
          );
      }
    render(){
        return (
            <div className="scoreboard">
            <Header totalPlayers={this.state.players.length} />
            {this.state.players.map( player =>
                <Player 
                  name={player.name}
                  id={player.id}
                  key={player.id.toString()}    
                  removePlayer = {this.deletePlayer}        
                />
              )}
              </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))