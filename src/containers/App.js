import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as CreatePlayers from '../actions/createPlayers';

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

    console.log('init app');
  }

  render() {
    console.log(this.props.players);

    return (
      <div className="App">
        <header className="App-header">
          App Time
        </header>
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
