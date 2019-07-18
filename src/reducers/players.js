import { Record } from 'immutable';

import * as actionTypes from '../constants/actionTypes';
import Player from '../models/player';
import {Players} from '../constants/players';
import reducerHandler from '../utils/reducerHandler';

const initialRecord = Record({
  players: null
});
const initialState = new initialRecord();

function createPlayers(state, action) {
  const nextPlayers = Players.reduce((playerObj, playerInfo) => {
     playerObj[[playerInfo.id]] = new Player(playerInfo.id, playerInfo.gameLogs);
     return playerObj;
  }, {})

  return state.withMutations((ctx) => {
    ctx.set('players', nextPlayers)
  });
}

const actionHandlers = {
	[actionTypes.CREATE_PLAYERS]: createPlayers
};

export default reducerHandler(initialState, actionHandlers);
