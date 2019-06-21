import React, { Component } from 'react';
import { Select } from 'antd';

const { Option, OptGroup } = Select;

export default class GameLogCategorySelection extends Component {

  _renderOption(weekNumber, index) {
    return (
      <Option key={index} value={index}>
        Week {weekNumber}
      </Option>
    )
  }

  _renderOptionsGroup(weeks, label) {
    const options = weeks.map((weekNumber, index) => {
      return this._renderOption(weekNumber, index);
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
        onChange={(value) => this.props.onGameLogWeekSelection(value)}
      >
        {this._renderOptionsGroup(this.props.weeks, 'Game Weeks')}
      </Select>
    )
  }
}
