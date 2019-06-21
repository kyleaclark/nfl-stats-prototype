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
  const nextPlayers = {}

  Players.forEach((playerInfo, index) => {
    const player = new Player(playerInfo.id, playerInfo.gameLogs);
    nextPlayers[[playerInfo.id]] = player
  });

  return state.withMutations((ctx) => {
    ctx.set('players', nextPlayers)
  });
}

const actionHandlers = {
	[actionTypes.CREATE_PLAYERS]: createPlayers
};

export default reducerHandler(initialState, actionHandlers);
