import React, { Component } from 'react';
import { Avatar} from 'antd';

const playerInfoBlock = {
  display: 'inline-block'
};

export default class PlayerCard extends Component {

  render() {
    const player = this.props.player;

    return (
      <div>
        <div style={playerInfoBlock}>
          <Avatar src={player.playerImageUrl} size={80} shape='square' />
        </div>

        <div style={playerInfoBlock}>
          <h3>
            {player.fullName}<br />{player.playerSeason.seasonYear} Game Logs
          </h3>
        </div>
      </div>
    )
  }
}
