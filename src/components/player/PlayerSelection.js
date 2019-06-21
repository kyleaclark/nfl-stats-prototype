import React, { Component } from 'react';
import { Avatar, Select } from 'antd';

const { Option, OptGroup } = Select;

export default class PlayerSelection extends Component {

  _renderOption(playerId, playerName, playerImageUrl) {
    return (
      <Option key={playerId} value={playerId}>
        <Avatar src={playerImageUrl} style={{ marginRight: '8px' }} />
        {playerName}
      </Option>
    )
  }

  _renderOptionsGroup(players, label) {
    let options = [];

    Object.values(players).forEach(player => {
      options.push(this._renderOption(player.id, player.fullName, player.playerImageUrl));
    });

    return (
      <OptGroup label={label}>
        {options}
      </OptGroup>
    );
  }

  render() {
    return (
      <Select
      value={this.props.value}
      size='large'
      style={{ paddingRight: '20px', width: '220px' }}
      onChange={(value) => this.props.onPlayerSelection(value)}>
        {this._renderOptionsGroup(this.props.players, 'Quarterbacks')}
      </Select>
    )
  }
}
