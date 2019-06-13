import React, { Component } from 'react';
import { Avatar, Button, Dropdown, Icon, Menu } from 'antd';

export default class PlayerSelection extends Component {

  _renderMenuItem(player) {
    return (
      <Menu.Item key={player.id} >
        <Avatar src={player.playerImageUrl} /> {player.fullName}
      </Menu.Item>
    )
  }

  _renderMenuOverlay() {
    let menuItems = [];

    Object.values(this.props.players).forEach(player => {
      menuItems.push(this._renderMenuItem(player));
    });

    return (
      <Menu onClick={(ev) => this.props.onPlayerSelection(ev.key)} theme='light'>
        {menuItems}
      </Menu>
    );
  }

  render() {
    return (
      <Dropdown overlay={this._renderMenuOverlay()}>
        <Button>
          Select Player <Icon type="down" />
        </Button>
      </Dropdown>
    )
  }
}
