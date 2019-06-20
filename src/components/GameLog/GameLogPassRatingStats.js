import React, { Component } from 'react';
import { Descriptions } from 'antd';


export default class PlayerCard extends Component {

  _renderValue(value) {
    return value.toFixed(2);
  }

  render() {
    const gameLog = this.props.gameLog;

    return (
      <div>

        <h4 style={{ marginTop: '20px'}}>Passer Rating Composite (0-158.33)</h4>

        <Descriptions
          bordered
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        >
          <Descriptions.Item label='Passer Rating'>
            {this._renderValue(gameLog.passRating)}
          </Descriptions.Item>
        </Descriptions>

        <h4 style={{marginTop: '20px'}}>Passer Rating Calculations (0-100)</h4>

        <Descriptions
          bordered
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        >
          <Descriptions.Item label='Passer Rating Scale' span={1}>
            {this._renderValue(gameLog.passRatingScale)}
          </Descriptions.Item>

          <Descriptions.Item label='Cmp to Att Scale'>
            {this._renderValue(gameLog.completionsToAttemptsRatingScale)}
          </Descriptions.Item>

          <Descriptions.Item label='Yds to Att Scale'>
            {this._renderValue(gameLog.yardsToAttemptsRatingScale)}
          </Descriptions.Item>

          <Descriptions.Item label='Tds to Att Scale'>
            {this._renderValue(gameLog.tdsToAttemptsRatingScale)}
          </Descriptions.Item>

          <Descriptions.Item label='Int to Att Scale'>
            {this._renderValue(gameLog.intsToAttemptsRatingScale)}
          </Descriptions.Item>
        </Descriptions>

      </div>
    )
  }
}
