import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Counter from "./Counter";
import Icon from './Icon';

class Player extends PureComponent {
  static propTypes = {
    name : PropTypes.string.isRequired,
    id : PropTypes.number.isRequired,
    handleScoreUpdate : PropTypes.func,
    handleRemovePlayer : PropTypes.func,
    index : PropTypes.number,
    score : PropTypes.number
  }
  render() {
    const {
      name,
      id,
      handleScoreUpdate,
      handleRemovePlayer,
      index,
      score,
      isHighScore
    } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button
            className="remove-player"
            onClick={() => handleRemovePlayer(id)}
          >
            ✖
          </button>
          <Icon isHighScore={isHighScore}/>
          {name}
        </span>
        <Counter
          handleScoreUpdate={handleScoreUpdate}
          index={index}
          score={score}
        />
      </div>
    );
  }
}

export default Player;
