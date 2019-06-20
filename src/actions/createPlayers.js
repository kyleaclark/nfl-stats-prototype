import * as actionTypes from '../constants/actionTypes';

export function createPlayers() {
  return async dispatch => {
    dispatch({
      type: actionTypes.CREATE_PLAYERS
    });
  };
}
