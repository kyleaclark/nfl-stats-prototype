import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

import { GameLogPassRatingScaleCategories } from '../../constants/GameLogCategories';

export default class PassRatingRadarChart extends PureComponent {

  _computeChartData(gameLog) {
    const fullScaleMark = 100;
    let data = [];

    Object.values(GameLogPassRatingScaleCategories).forEach(gameLogCategory => {
      data.push({
        category: gameLogCategory.shorthand,
        scaleValue: gameLog[gameLogCategory.id],
        fullMark: fullScaleMark
      })
    });

    const ratingIndex = data.length - 1;
    data.unshift(data.splice(ratingIndex, 1)[0]);

    return data
  }

  render() {
    const data = this._computeChartData(this.props.gameLog);
    const playerName = this.props.playerName;

    console.log('data : ', data);

    return (
        <RadarChart outerRadius={125} width={500} height={500} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey='category' />
          <PolarRadiusAxis angle={60} domain={[0, 100]} />
          <Radar name={playerName} dataKey='scaleValue' stroke="#008ccc" fill="#008ccc" fillOpacity={0.6} />
        </RadarChart>
    );
  }
}
