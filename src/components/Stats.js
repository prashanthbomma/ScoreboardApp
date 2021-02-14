import React from "react";

const Stats = (props) => {
  const totaPlayers = props.players.length;
  const totalScore = props.players.reduce((total,player)=>{
      return total+player.score
  },0);
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totaPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stats;
