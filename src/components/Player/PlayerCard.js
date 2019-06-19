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
          <h4>{name}<br />2018 Stats</h4>
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
            <Col span={12}>
              <Statistic title="Attempts" value={playerSeason.sumStats.passAttempts} />
            </Col>
            <Col span={12}>
              <Statistic title="Completions" value={playerSeason.sumStats.passCompletions} />
            </Col>
          </Row>

          <Row gutter={8}>
            <Col span={12}>
              <Statistic title="Passing Yards" value={playerSeason.sumStats.passYards} />
            </Col>
            <Col span={12}>
              <Statistic title="Passing Tds" value={playerSeason.sumStats.passTds} />
            </Col>
          </Row>
        </Card>
    )
  }
}
