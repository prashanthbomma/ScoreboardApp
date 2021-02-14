import React, { Component } from "react";

class AddPlayerForm extends Component {
    state = {
        value:''
    };
    handleInputChange = (e) =>{
        this.setState({value:e.target.value});
    }
    handleSubmitValue = (e) =>{
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({value:''});
    }
  render() {
    return (
      <form onSubmit={this.handleSubmitValue}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
          placeholder="Enter a player's name"
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
