import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Icon, Layout, Row, Col, Card } from 'antd';

import * as CreatePlayers from '../actions/createPlayers';
import { GameLogPassCategories, GameLogRushCategories } from '../constants/GameLogCategories';
import GameLogTable from '../components/GameLog/GameLogTable';
import GameLogChart from '../components/GameLog/GameLogChart';
import PassRatingRadarChart from '../components/Charts/PassRatingRadarChart';
import GameLogCategorySelection from '../components/GameLog/GameLogCategorySelection';
import PlayerCard from '../components/Player/PlayerCard';
import PlayerSelection from '../components/Player/PlayerSelection';

import './App.css';

const { Header, Content, Footer } = Layout;

function mapStateToProps(state) {
  return {
    players: state.players.get('players')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CreatePlayers, dispatch);
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedPlayer: null,
      selectedGameLogCategory: GameLogPassCategories.passAttempts
    };
  }

  componentDidMount() {
    this.props.createPlayers()
      .then(() => {
        this.setState({
          selectedPlayer: this.props.players[Object.keys(this.props.players)[0]]
        });
      })
      .catch((error) => {
        // TODO: Handle error in the UI for the user
        console.error('createPlayers : ', error);
      });

  }

  _onPlayerSelection = (playerId) => {
    this.setState({
      selectedPlayer: this.props.players[playerId]
    });
  }

  onGameLogCategorySelection = (gameLogCategoryId) => {
    let gameLogCategory = this.state.selectedGameLogCategory;

    if (gameLogCategoryId in GameLogPassCategories) {
      gameLogCategory = GameLogPassCategories[gameLogCategoryId];
    } else if (gameLogCategoryId in GameLogRushCategories) {
      gameLogCategory = GameLogRushCategories[gameLogCategoryId];
    }

    this.setState({ selectedGameLogCategory: gameLogCategory });
  }

  _renderPassRatingRadarChart(selectedPlayer) {
    return (

        <PassRatingRadarChart
          gameLog={selectedPlayer.playerSeason.gameLogs[0]}
          playerName={selectedPlayer.fullName} />

    )
  }

  _renderGameLogTable(selectedPlayer) {
    return (
      <Row gutter={8} style={{ marginBottom: '40px' }}>
        <Col span={24}>
          <h4>2018 Game Logs</h4>
          <GameLogTable gameLogs={selectedPlayer.playerSeason.gameLogs} />
        </Col>
      </Row>
    );
  }

  _renderPlayerOverview(selectedPlayer, selectedGameLogCategory) {
    return (
      <Row gutter={8} style={{ marginBottom: '40px' }}>
        <Col xs={24} lg={8} xl={6}>
          <PlayerCard player={selectedPlayer} />
        </Col>

        <Col xs={24} lg={16} xl={18}>
          <GameLogChart gameLogCategory={selectedGameLogCategory} player={selectedPlayer} />
        </Col>
      </Row>
    )
  }

  _renderSelection(selectedPlayer, selectedGameLogCategory) {
    return (
      <Row gutter={16} style={{ marginBottom: '40px' }}>
        <Col xs={24}>

          <PlayerSelection
            defaultValue={selectedPlayer.id}
            players={this.props.players}
            onPlayerSelection={this._onPlayerSelection} />

          <GameLogCategorySelection
              onGameLogCategorySelection={this.onGameLogCategorySelection}
              defaultValue={selectedGameLogCategory.id} />

        </Col>
      </Row>
    );
  }

  render() {
    const selectedGameLogCategory = this.state.selectedGameLogCategory;
    const selectedPlayer = this.state.selectedPlayer;

    return (
      <div style={{ backgroundColor: '#fff' }}>

        <Row style={{ backgroundColor: '#111' }}>
          <Col span={24}>
            <div style={{ margin: '0 auto', maxWidth: '1600px', padding: '20px' }}>
              <Icon type="radar-chart" style={{ color: '#008ccc', fontSize: '32px', }} />

              <span style={{ color: '#fff', fontSize: '24px', paddingLeft: '10px' }}>NFL Stats Prototype</span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <div style={{ margin: '0 auto', maxWidth: '1600px', padding: '20px' }}>

              <h3>Check out 2018 player game logs and stats</h3>

              {selectedPlayer && this._renderSelection(selectedPlayer, selectedGameLogCategory)}

              {selectedPlayer && this._renderPlayerOverview(selectedPlayer, selectedGameLogCategory)}

              {selectedPlayer && this._renderGameLogTable(selectedPlayer)}

            </div>
          </Col>
        </Row>

        <Row style={{ backgroundColor: '#eee', textAlign: 'center' }}>
          <Col span={24}>
            <div style={{ margin: '0 auto', maxWidth: '1600px', padding: '20px', textAlign: 'center' }}>
              NFL Stats Prototype - Created by Kyle Clark
            </div>
          </Col>
        </Row>

      </div>
    );
  }

}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
App = withRouter(App);

export default App;
