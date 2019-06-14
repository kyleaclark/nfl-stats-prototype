import {playerDataSources} from './playerData';

function computeGameLabels(headerNodes) {
  return headerNodes.map((header, index) => {
    return header.label.toLowerCase();
  });
}

function computeGameObjects(gameNodes, gameLabels) {
  return gameNodes.map((gameNode, gameIndex) => {
    let gameAttributes = {}
    gameNode.forEach((value, valueIndex) => {
      gameAttributes[gameLabels[valueIndex]] = value;
    });
    return gameAttributes;
  });
}

export const Players = playerDataSources.map((playerData, index) => {
  const nodeLabels = computeGameLabels(playerData.playerHeaders)
  const nodes = computeGameObjects(playerData.playerNodes, nodeLabels)
  const player = {
    'id': playerData.playerId,
    'gameLogs': nodes
  };

  return player;
});
