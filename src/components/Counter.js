import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({index,score,handleScoreUpdate}) => {
 
      return (
        <div className="counter">
          <button
            className="counter-action decrement"
            onClick={() => handleScoreUpdate(index,-1)}
          >
            -
          </button>
          <span className="counter-score">{score}</span>
          <button
            className="counter-action increment"
            onClick={() => handleScoreUpdate(index,1)}
          >
            +
          </button>
        </div>
      );
    }
  
  Counter.propTypes ={
    index: PropTypes.number,
    score: PropTypes.number,
    handleScoreUpdate: PropTypes.func
  }
  export default Counter;