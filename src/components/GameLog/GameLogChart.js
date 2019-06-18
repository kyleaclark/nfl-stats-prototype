import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class GameLogChart extends PureComponent {

  _computeChartData(playerSeason, gameLogCategoryId) {
    let data = [];

    playerSeason.gameLogs.forEach((gameLog, index) => {
      let dataItem = {
        name: `Wk ${gameLog.week}`
      };

      dataItem[gameLogCategoryId] = gameLog[gameLogCategoryId];

      data.push(dataItem);
    });

    return data
  }

  render() {
    const gameLogCategory = this.props.gameLogCategory;
    const data = this._computeChartData(this.props.player.playerSeason, gameLogCategory.id);
    const barName = `${gameLogCategory.description} by Week Played`;

    return (
      <ResponsiveContainer width='100%' height={300}>
        <BarChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" interval={0} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={gameLogCategory.id} name={barName} fill="#008ccc" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
