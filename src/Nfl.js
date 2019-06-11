import React, { Component } from 'react';
import {players} from './constants/players';


class Nfl extends Component {
  render() {
    console.log('player');
    console.log(players);

    return (
      <div>
        <div>
          <h2>Welcome to the NBA Trade Machine prototype</h2>
        </div>
      </div>
    );
  }
}

export default Nfl;
