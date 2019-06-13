import React, { Component } from 'react';
import { Avatar, Table } from 'antd';

const containerStyle = {
  paddingLeft: '20%'
}

function sortData(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

export default class PlayerStatsTable extends Component {

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

  _renderAvatarColumnHtml(data) {
    return (
      <Avatar src={data.imageUrl} alt={data.label} />
    )
  }

  _generateAvatarColumn(key, title) {
    return {
      title: title,
      dataIndex: key,
      key: key,
      sorter: (a, b) => sortData(a[key], b[key]),
      sortDirections: ['descend', 'ascend'],
      render: (data) => <Avatar src={data.imageUrl} alt={data.label} />
    }
  }

  _generateTextColumn(key, title) {
    return {
      title: title,
      dataIndex: key,
      key: key,
      sorter: (a, b) => sortData(a[key], b[key]),
      sortDirections: ['descend', 'ascend'],
    }
  }


  _generateColumns() {
    // week
    // gameDate
    // team
    // teamImageUrl
    // opponent
    // opponentImageUrl
    // passAttempts
    // passCompletions
    // passYards
    // passTds
    // rushAttempts
    // rushYards
    // rushTds
    // interceptions
    // sacks

    return [
      this._generateTextColumn('week', 'Week'),
      this._generateTextColumn('gameDate', 'Game Date'),
      this._generateAvatarColumn('team', 'Team'),
      this._generateAvatarColumn('opponent', 'Opponent'),
      this._generateTextColumn('passAttempts', 'Pass Attempts'),
      this._generateTextColumn('passCompletions', 'Pass Completions'),
      this._generateTextColumn('passYards', 'Pass Tds'),
      this._generateTextColumn('rushAttempts', 'Rush Attempts'),
      this._generateTextColumn('rushYards', 'Rush Yards'),
      this._generateTextColumn('rushTds', 'Rush Tds'),
      this._generateTextColumn('interceptions', 'interceptions'),
      this._generateTextColumn('sacks', 'Sacks')
    ]
  }

  render() {
    const dataSource = this._generatePlayerData();
    const columns = this._generateColumns();

    console.log('dataSource : ', dataSource);
    console.log('columns : ', columns);

    return (
      <div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    )
  }
}
