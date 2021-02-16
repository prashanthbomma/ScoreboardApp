import React, { Component } from "react";

class AddPlayerForm extends Component {
    playerInput = React.createRef();
    handleSubmitValue = (e) =>{
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
    }
  render() {
    return (
      <form onSubmit={this.handleSubmitValue}>
        <input
          type="text"
          ref = {this.playerInput}
          placeholder="Enter a player's name"
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
