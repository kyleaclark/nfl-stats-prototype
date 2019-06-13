import React, { Component } from 'react';
import { Avatar, Table, Tooltip } from 'antd';

const containerStyle = {
  paddingLeft: '20%'
}

function sortData(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

export default class GameLogTable extends Component {

  _generatePlayerData() {
    const player = this.props.player;

    return player.playerSeason.games.map((game, index) => {
      let gameObj = Object.assign({}, game);
      let gameData = {
        'key': index,
        'team': {'label': gameObj.team, 'imageUrl': gameObj.teamImageUrl},
        'opponent': {'label': gameObj.opponent, 'imageUrl': gameObj.opponentImageUrl}
      };

      delete gameObj.team;
      delete gameObj.teamImageUrl;
      delete gameObj.opponent;
      delete gameObj.opponentImageUrl;

      Object.keys(gameObj).forEach(key => gameData[key] = gameObj[key]);

      return gameData
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
      this._generateTextColumn('gameDate', 'Date', 'Game Date', this._renderDateColumn),
      this._generateAvatarColumn('team', 'Tm', 'Team'),
      this._generateAvatarColumn('opponent', 'Opp', 'Opponent'),
      this._generateTextColumn('passAttempts', 'Att', 'Passing Attempts'),
      this._generateTextColumn('passCompletions', 'Cmp', 'Completed Passes'),
      this._generateTextColumn('passCompletionRate', 'Cmp%', 'Completion Percentage'),
      this._generateTextColumn('passYards', 'Yds', 'Passing Yards'),
      this._generateTextColumn('passTds', 'TD', 'Passing Tds'),
      this._generateTextColumn('interceptions', 'Int', 'Interceptions Thrown'),
      this._generateTextColumn('sacks', 'Sk', 'Times Sacked'),
      this._generateTextColumn('passYardsRate', 'Y/A', 'Passing Yards Per Attempt'),
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

  _renderDateColumn(data) {
    const dateObj = new Date(data);
    return dateObj.toDateString();
  }

  render() {
    const columns = this._generateColumns();
    let dataSource = null;

    if (this.props.player) {
      this._generatePlayerData();
    }

    console.log('dataSource : ', dataSource);
    console.log('columns : ', columns);

    return (
      <div>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          size={'small'} />
      </div>
    )
  }
}
