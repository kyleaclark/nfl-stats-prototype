import React, { Component } from 'react';
import { Avatar, Table, Tooltip } from 'antd';

import { GameLogInfoCategories, GameLogPassCategories, GameLogRushCategories } from '../../constants/GameLogCategories';

function sortData(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

const monthStrings = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default class GameLogTable extends Component {

  _generateGameLogTableData(gameLogs) {
    return gameLogs.map((gameLog, index) => {
      let gameLogCopy = Object.assign({}, gameLog);
      let gameDataSource = {
        'key': index,
        'team': {'label': gameLogCopy.team, 'imageUrl': gameLogCopy.teamImageUrl},
        'opponent': {'label': gameLogCopy.opponent, 'imageUrl': gameLogCopy.opponentImageUrl}
      };

      delete gameLogCopy.team;
      delete gameLogCopy.teamImageUrl;
      delete gameLogCopy.opponent;
      delete gameLogCopy.opponentImageUrl;

      Object.keys(gameLogCopy).forEach(key => gameDataSource[key] = gameLogCopy[key]);

      return gameDataSource;
    });
  }

  _generateAvatarColumn(key, name, title) {
    return {
      title: this._renderColumnName(name, title),
      dataIndex: key,
      key: key,
      sorter: (a, b) => sortData(a[key].label, b[key].label),
      sortDirections: ['descend', 'ascend'],
      render: (data) => <Avatar src={data.imageUrl} alt={data.label} />
    }
  }

  _generateDefaultColumn(key, name, title, renderFn) {
    const column = {
      title: this._renderColumnName(name, title),
      dataIndex: key,
      key: key,
      sorter: (a, b) => sortData(a[key], b[key]),
      sortDirections: ['descend', 'ascend'],
    }

    if (renderFn) {
      column.render = (data) => renderFn(data)
    }

    return column;
  }

  _generateColumnsByCategory(gameLogCategories) {
    const renderFnMap = {
      'date': this._renderDateValue,
      'decimal': this._renderDecimalValue,
      'int': null,
      'percentage': this._renderPercentageValue,
      'text': null
    };

    return Object.values(gameLogCategories).map((category) => {
      if (category.type === 'avatar') {
        return this._generateAvatarColumn(
          category.id, category.shorthand, category.description
        );
      } else {
        return this._generateDefaultColumn(
          category.id, category.shorthand, category.description, renderFnMap[category.type]
        );
      }
    });
  }

  _generateColumns() {
    return [{
      title: 'Game Info',
      children: this._generateColumnsByCategory(GameLogInfoCategories)
    }, {
      title: 'Passing',
      children: this._generateColumnsByCategory(GameLogPassCategories)
    }, {
      title: 'Rushing',
      children: this._generateColumnsByCategory(GameLogRushCategories)
    }]
  }

  _renderColumnName(name, title) {
    return (
      <Tooltip title={title}>
        <span>{name}</span>
      </Tooltip>
    )
  }

  _renderDateValue(val) {
    const dateStr = val.replace(/-/g, '/');
    const parsedDate = new Date(dateStr);
    const month = monthStrings[parsedDate.getMonth()];
    const day = ('0' + parsedDate.getDate()).slice(-2);
    return `${month} ${day}`;
  }

  _renderPercentageValue(val) {
    return (val * 100).toFixed(2);
  }

  _renderDecimalValue(val) {
    return val.toFixed(2);
  }

  render() {
    const columns = this._generateColumns();
    let tableData = null;

    if (this.props.gameLogs) {
      tableData = this._generateGameLogTableData(this.props.gameLogs);
    }

    return (
      <div>
        <Table
          dataSource={tableData}
          columns={columns}
          pagination={false}
          size={'small'}
          style={{ border: '0' }} />
      </div>
    )
  }
}
