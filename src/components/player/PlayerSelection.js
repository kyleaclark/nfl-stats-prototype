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
    const placeholder = this.props.defaultValue || 'Select Player';

    return (
      <Select defaultValue={placeholder} size='large' style={{ width: '200px' }} onChange={(value) => this.props.onPlayerSelection(value)}>
        {this._renderOptionsGroup(this.props.players, 'Quarterbacks')}
      </Select>
    )
  }
}
