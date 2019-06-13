import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Avatar, Layout } from 'antd';

import * as CreatePlayers from '../actions/createPlayers';
import GameLogTable from '../components/GameLog/GameLogTable';
import PlayerSelection from '../components/Player/PlayerSelection';

import './App.css';

const { Header, Content, Footer } = Layout;

const playerInfoBlock = {
  display: 'inline-block'
};

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

  _renderSelectedPlayerInfo(player) {
    return (
      <div>
        <div style={playerInfoBlock}>
          <Avatar src={player.playerImageUrl} size={128} shape='square' />
        </div>

        <div style={playerInfoBlock}>
          <h3>
            {player.fullName}<br />{player.playerSeason.seasonYear} Game Logs
          </h3>
        </div>
      </div>
    )
  }

  render() {
    let selectedPlayer = null;

    if (this.props.players && this.state.selectedPlayerId in this.props.players) {
      selectedPlayer = this.props.players[this.state.selectedPlayerId];
      console.log(selectedPlayer);
    }


    return (
      <Layout className="layout">
        <Header>
          <h2>NFL Stats Prototype</h2>
        </Header>

        <Content style={{ background: '#fff', border: '0', minHeight: '400px', padding: '20px' }}>

          {this.props.players
            && <PlayerSelection players={this.props.players} onPlayerSelection={this._onPlayerSelection} />}

          {selectedPlayer && this._renderSelectedPlayerInfo(selectedPlayer)}

          <GameLogTable player={selectedPlayer} />

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
