import React, { Component } from 'react';
import { Avatar, Table, Tooltip } from 'antd';

function sortData(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

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

  _generateTextColumn(key, name, title, renderFn) {
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

  _generateColumns() {
    return [
      this._generateTextColumn('week', 'Week', 'Week Number'),
      this._generateTextColumn('gameDate', 'Date', 'Game Date', this._renderDateValue),
      this._generateAvatarColumn('team', 'Tm', 'Team'),
      this._generateAvatarColumn('opponent', 'Opp', 'Opponent'),
      this._generateTextColumn('passAttempts', 'Att', 'Passing Attempts'),
      this._generateTextColumn('passCompletions', 'Cmp', 'Completed Passes'),
      this._generateTextColumn('passCompletionRate', 'Cmp%', 'Completion Percentage', this._renderPercentageValue),
      this._generateTextColumn('passYards', 'Yds', 'Passing Yards'),
      this._generateTextColumn('passTds', 'TD', 'Passing Tds'),
      this._generateTextColumn('interceptions', 'Int', 'Interceptions Thrown'),
      this._generateTextColumn('sacks', 'Sk', 'Times Sacked'),
      this._generateTextColumn('passYardsRate', 'Y/A', 'Passing Yards Per Attempt', this._renderDecimalValue),
      this._generateTextColumn('rushAttempts', 'Att', 'Rushing Attempts'),
      this._generateTextColumn('rushYards', 'Yds', 'Rushing Yards'),
      this._generateTextColumn('rushTds', 'TD', 'Rushing Tds'),
    ]
  }

  _renderColumnName(name, title) {
    return (
      <Tooltip title={title}>
        <span>{name}</span>
      </Tooltip>
    )
  }

  _renderDateValue(val) {
    const dateObj = new Date(val);
    return dateObj.toDateString();
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
          size={'small'} />
      </div>
    )
  }
}
