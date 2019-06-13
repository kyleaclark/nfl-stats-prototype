import PlayerSeason from './playerSeason';

export default class Player {

  constructor(playerId, playerGames) {
    //console.log(playerGames);
    this.id = playerId;
    this.fullName = playerGames[0].fullname;
    this.playerImageUrl = playerGames[0].playerimage;
    this.playerSeason = new PlayerSeason(playerGames[0].seasonyear);
    this.computePlayerSeason(playerGames)
  }

  computePlayerSeason(games) {
    games.forEach((gameInfo, index) => {
      this.playerSeason.computeGameInfo(gameInfo);
    });
  }

}
