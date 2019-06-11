import * as actionTypes from '../constants/actionTypes';

export function createPlayers() {
  return dispatch => {
    dispatch({
      type: actionTypes.CREATE_PLAYERS
    });
  };
}
