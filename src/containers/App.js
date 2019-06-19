import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Icon, Layout, Row, Col } from 'antd';

import * as CreatePlayers from '../actions/createPlayers';
import { GameLogPassCategories, GameLogRushCategories } from '../constants/GameLogCategories';
import GameLogTable from '../components/GameLog/GameLogTable';
import GameLogChart from '../components/GameLog/GameLogChart';
import GameLogCategorySelection from '../components/GameLog/GameLogCategorySelection';
import PlayerCard from '../components/Player/PlayerCard';
import PlayerSelection from '../components/Player/PlayerSelection';

import './App.css';

const { Header, Content, Footer } = Layout;

const containerStyle = {
  background: '#fff',
  border: '0',
  maxWidth: '1600px',
  minWidth: '800px',
  minHeight: '400px',
  padding: '20px 50px'
}

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
    this.props.createPlayers();
    this.state = { selectedPlayerId: null };
  }

  _onPlayerSelection = (playerId) => {
    this.setState({
      selectedPlayerId: playerId,
      selectedGameLogCategory: GameLogPassCategories.passAttempts
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

  _renderGameLogTable(selectedPlayer) {
    return (
      <Row gutter={8} style={{ marginBottom: '40px' }}>
        <Col span={24}>
          {selectedPlayer && <GameLogTable gameLogs={selectedPlayer.playerSeason.gameLogs} />}
        </Col>
      </Row>
    );
  }

  _renderPlayerOverview(selectedPlayer, selectedGameLogCategory) {
    return (
      <Row gutter={8} style={{ marginBottom: '40px' }}>
        <Col span={6}>
          {selectedPlayer && <PlayerCard player={selectedPlayer} />}
        </Col>

        <Col span={18}>
          {selectedGameLogCategory
            && <GameLogChart gameLogCategory={selectedGameLogCategory} player={selectedPlayer} />}
        </Col>
      </Row>
    )
  }

  _renderSelection(selectedPlayer, selectedGameLogCategory) {
    return (
      <Row gutter={16} style={{ marginBottom: '40px' }}>
        <Col span={4}>
          {this.props.players
            && <PlayerSelection players={this.props.players} onPlayerSelection={this._onPlayerSelection} />}
        </Col>

        <Col span={4}>
          {selectedPlayer
            && <GameLogCategorySelection
                  onGameLogCategorySelection={this.onGameLogCategorySelection}
                  defaultValue={selectedGameLogCategory.id} />
          }
        </Col>
      </Row>
    );
  }

  render() {
    const selectedGameLogCategory = this.state.selectedGameLogCategory;
    let selectedPlayer = null;

    if (this.props.players && this.state.selectedPlayerId in this.props.players) {
      selectedPlayer = this.props.players[this.state.selectedPlayerId];
      console.log(selectedPlayer);
    }

    return (
      <Layout className='layout' style={{ backgroundColor: '#fff', margin: '0 auto' }}>

        <Header style={{ backgroundColor: '#111' }}>
          <div style={{ paddingLeft: '10px' }}>
              <Icon type="radar-chart" style={{ color: '#008ccc', fontSize: '32px', }} />

              <span style={{ color: '#fff', fontSize: '24px', paddingLeft: '10px' }}>NFL Stats Prototype</span>
          </div>
        </Header>

        <Content style={containerStyle}>

          <h3>Check out 2018 player game logs and stats</h3>

          {this._renderSelection(selectedPlayer, selectedGameLogCategory)}

          {this._renderPlayerOverview(selectedPlayer, selectedGameLogCategory)}

          {this._renderGameLogTable(selectedPlayer)}

        </Content>

        <Footer style={{ textAlign: 'center' }}>NFL Stats Prototype - Created by Kyle Clark</Footer>

      </Layout>
    );
  }

}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
App = withRouter(App);

export default App;
