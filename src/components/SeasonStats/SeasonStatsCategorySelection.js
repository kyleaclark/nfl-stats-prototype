import React, { Component } from 'react';
import { Avatar, Select } from 'antd';

import { GameLogPassCategories, GameLogRushCategories } from '../../constants/GameLogCategories';

const { Option, OptGroup } = Select;

export default class GameLogCategorySelection extends Component {

  _renderOption(categoryId, categoryLabel) {
    return (
      <Option key={categoryId} value={categoryId}>
        {categoryLabel}
      </Option>
    )
  }

  _renderOptionsGroup(categories, label) {
    const options = Object.values(categories).map(category => {
      return this._renderOption(category.id, category.description);
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
        style={{ width: '220px' }}
        onChange={(value) => this.props.onGameLogCategorySelection(value)}
      >
        {this._renderOptionsGroup(GameLogPassCategories, 'Passing Stats')}
        {this._renderOptionsGroup(GameLogRushCategories, 'Rushing Stats')}
      </Select>
    )
  }
}
