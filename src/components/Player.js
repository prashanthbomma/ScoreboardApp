import React from 'react';

import Counter from './Counter'

const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
          <button
            className="remove-player"
            onClick={() => props.handleRemovePlayer(props.id)}>
            ✖
          </button>
          {props.name}
        </span>
        <Counter handleScoreUpdate={props.handleScoreUpdate} 
            index={props.index}
            score={props.score}
        />
      </div>
    );
  };

export default Player;