import PlayerSeason from './playerSeason';

export default class Player {

  constructor(playerId, playerGameLogs) {
    this.id = playerId;
    this.fullName = playerGameLogs[0].fullname;
    this.playerImageUrl = playerGameLogs[0].playerimage;
    this.playerSeason = new PlayerSeason(playerGameLogs[0].seasonyear);
    this.computePlayerSeason(playerGameLogs);
  }

  computePlayerSeason(playerGameLogs) {
    playerGameLogs.forEach((gameLogInfo, index) => {
      this.playerSeason.computeGameInfo(gameLogInfo);
    });
  }

}
