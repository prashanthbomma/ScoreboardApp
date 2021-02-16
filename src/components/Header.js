import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({players})=> {
    return (
      <header>
        <Stats players = {players} />
        <h1>Scoreboard</h1>
        <Stopwatch />
      </header>
    );
  };
Header.propTypes ={
  players: PropTypes.arrayOf(PropTypes.Object)
}
export default Header;