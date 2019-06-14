import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Icon, Layout } from 'antd';

import * as CreatePlayers from '../actions/createPlayers';
import GameLogTable from '../components/GameLog/GameLogTable';
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
    this.props.createPlayers();
    this.state = { selectedPlayerId: null };
  }

  _onPlayerSelection = (playerId) => {
    this.setState({ selectedPlayerId: playerId });
  }

  render() {
    let selectedPlayer = null;

    if (this.props.players && this.state.selectedPlayerId in this.props.players) {
      selectedPlayer = this.props.players[this.state.selectedPlayerId];
      console.log(selectedPlayer);
    }

    return (
      <Layout className='layout'>

        <Header style={{ backgroundColor: '#111' }}>
          <div style={{ paddingLeft: '10px' }}>
              <Icon type="radar-chart" style={{ color: '#008ccc', fontSize: '32px', }} />

              <span style={{ color: '#fff', fontSize: '24px', paddingLeft: '10px' }}>NFL Stats Prototype</span>
          </div>
        </Header>

        <Content style={{ background: '#fff', border: '0', minHeight: '400px', padding: '20px 50px' }}>

          <h4>Check out 2018 player game logs and stats</h4>

          <div style={{ marginBottom: '20px' }}>
            {this.props.players
              && <PlayerSelection players={this.props.players} onPlayerSelection={this._onPlayerSelection} />}
          </div>

          {selectedPlayer && <PlayerCard player={selectedPlayer} />}

          <div style={{ margin: '20px 0' }}>
            {selectedPlayer && <GameLogTable gameLogs={selectedPlayer.playerSeason.gameLogs} />}
          </div>

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
