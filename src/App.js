import React from 'react';
import logo from './logo.svg';
import Nfl from './Nfl';
import './App.css';

function mapStateToProps(state) {
  return {
    players: state.trade.get('players')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TradeActions, dispatch);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nfl></Nfl>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
App = withRouter(App);

export default App;
