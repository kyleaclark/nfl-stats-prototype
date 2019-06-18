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
    let options = [];

    Object.values(categories).forEach(category => {
      options.push(this._renderOption(category.id, category.description));
    });

    return (
      <OptGroup label={label}>
        {options}
      </OptGroup>
    );
  }

  render() {
    const placeholder = this.props.defaultValue || 'Select Game Log Stat';

    return (
      <Select
        defaultValue={placeholder}
        size='large'
        style={{ width: '200px' }} 
        onChange={(value) => this.props.onGameLogCategorySelection(value)}
      >
        {this._renderOptionsGroup(GameLogPassCategories, 'Passing Stats')}
        {this._renderOptionsGroup(GameLogRushCategories, 'Rushing Stats')}
      </Select>
    )
  }
}
