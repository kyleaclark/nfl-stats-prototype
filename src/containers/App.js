import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as CreatePlayers from '../actions/createPlayers';
import PlayerSelection from '../components/player/PlayerSelection';
import PlayerStatsTable from '../components/player/PlayerStatsTable';

import './App.css';

const divStyle = {
  float: 'left',
  width: '40%'
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

  render() {
    let selectedPlayer = null;

    if (this.props.players && this.state.selectedPlayerId in this.props.players) {
      selectedPlayer = this.props.players[this.state.selectedPlayerId];
      console.log(selectedPlayer);
    }


    return (
      <div className="App">
        <header className="App-header">
          NFL Stats Prototype
        </header>

        <div>
          {this.props.players
            && <PlayerSelection players={this.props.players} onPlayerSelection={this._onPlayerSelection} />}

          {selectedPlayer &&
            <PlayerStatsTable player={selectedPlayer} />}
        </div>
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
