import React, { Component } from 'react';
import { Avatar, Card, Statistic, Row, Col, Button } from 'antd';


export default class PlayerCard extends Component {

  _renderCardTitle(name, imageUrl) {
    return (
      <Row gutter={4}>
        <Col span={8}>
          <Avatar src={imageUrl} size={64} shape='square' />
        </Col>

        <Col span={16}>
          <h4>{name}<br />2018 Season Stats</h4>
        </Col>
      </Row>
    )
  }

  render() {
    const player = this.props.player;
    const playerSeason = player.playerSeason;

    return (
        <Card title={this._renderCardTitle(player.fullName, player.playerImageUrl)} style={{ width: '100%' }}>
          <Row gutter={8}>
            <Col span={8}>
              <Statistic title='Att' value={playerSeason.sumStats.passAttempts} />
            </Col>
            <Col span={8}>
              <Statistic title='Cmp' value={playerSeason.sumStats.passCompletions} />
            </Col>
            <Col span={8}>
              <Statistic
                title='Cmp %'
                value={playerSeason.avgStats.passCompletionRate}
                formatter={(value) => (value * 100).toFixed(2)} />
            </Col>
          </Row>

          <Row gutter={8}>
            <Col span={8}>
              <Statistic title='Pass Yds' value={playerSeason.sumStats.passYards} />
            </Col>
            <Col span={8}>
              <Statistic title='Pass Tds' value={playerSeason.sumStats.passTds} />
            </Col>
            <Col span={8}>
              <Statistic title='Ints' value={playerSeason.sumStats.interceptions} />
            </Col>
          </Row>
        </Card>
    )
  }
}
