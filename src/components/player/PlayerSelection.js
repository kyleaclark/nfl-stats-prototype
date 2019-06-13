import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, Avatar } from 'antd';

const containerStyle = {
  paddingLeft: '20%'
}

export default class PlayerSelection extends Component {

  _onSelectPlayer(e) {
    console.log('click', e);
  }

  _renderMenuItem(player) {
    return (
      <Menu.Item key={player.id} >
        <Avatar src={player.playerImageUrl} /> {player.fullName}
      </Menu.Item>
    )
  }

  _renderMenu() {
    let menuItems = [];

    Object.values(this.props.players).forEach(player => {
      menuItems.push(this._renderMenuItem(player));
    });

    return (
      <Menu onClick={(ev) => this.props.onPlayerSelection(ev.key)} >
        {menuItems}
      </Menu>
    );
  }

  _renderMenuOverlay() {
    return (
      <div style={containerStyle}>
        <div>
          <Menu onClick={(ev) => this._onSelectPlayer(ev.key)} mode='horizontal' theme='light'>
            {this._renderMenu()}
          </Menu>
        </div>
      </div>
    );
  }

  render() {
    console.log('PlayerSelection : ', this.props.players);

    return (
      <div>
        <Dropdown overlay={this._renderMenuOverlay()}>
          <Button>
            <span>Select Player <Icon type="down" /></span>
          </Button>
        </Dropdown>
      </div>
    )
  }
}
