import React, { Component } from 'react';
import { Avatar, Button, Dropdown, Icon, Menu } from 'antd';

import { GameLogPassCategories, GameLogRushCategories } from '../../constants/GameLogCategories';

export default class GameLogCategorySelection extends Component {

  _renderMenuItem(categoryId, categoryLabel) {
    const isSelected = categoryId === this.props.selectedCategory.id;

    return (
      <Menu.Item key={categoryId} select >
        {categoryLabel}
      </Menu.Item>
    )
  }

  _renderMenuOverlay() {
    let menuItems = [];

    Object.values(GameLogPassCategories).forEach(category => {
      menuItems.push(this._renderMenuItem(category.id, category.description));
    });

    Object.values(GameLogRushCategories).forEach(category => {
      menuItems.push(this._renderMenuItem(category.id, category.description));
    });

    return (
      <Menu onClick={(ev) => this.props.onGameLogCategorySelection(ev.key)} theme='light'>
        {menuItems}
      </Menu>
    );
  }

  render() {
    return (
      <Dropdown overlay={this._renderMenuOverlay()}>
        <Button size='large'>
          Select Game Log Stat <Icon type='down' />
        </Button>
      </Dropdown>
    )
  }
}
