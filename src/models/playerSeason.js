import PlayerGame from './PlayerGame';

export default class PlayerSeason {

  constructor(seasonYear) {
    this.seasonYear = seasonYear;
    this.intoSeasonProps();
  }

  intoSeasonProps() {
    this.games = [];
    this.gamesPlayed = 0;
    this.weekIndexKeyMap = {};
    this.weeks = [];
    this.gameDates = [];
    this.teams = [];
    this.teamImageUrls = [];
    this.opponents = [];
    this.opponentImageUrls = [];
    this.passAttempts = [];
    this.passCompletions = [];
    this.passYards = [];
    this.passTds = [];
    this.rushAttempts = [];
    this.rushYards = [];
    this.rushTds = [];
    this.interceptions = [];
    this.sacks = [];
    this.passYardsRates = [];
    this.passCompletionRates = [];
  }

  computeGameInfo(gameInfo) {
    const playerGame = new PlayerGame(gameInfo);
    this.games.push(playerGame);

    // process game details and counting stats
    this.gamesPlayed += 1;
    this.weeks.push(playerGame.week);
    this.gameDates.push(playerGame.gameDate);
    this.teams.push(playerGame.team)
    this.teamImageUrls.push(playerGame.teamImageUrl);
    this.opponents.push(playerGame.opponent);
    this.opponentImageUrls.push(playerGame.opponentImageUrl);
    this.passAttempts.push(playerGame.passAttempts);
    this.passCompletions.push(playerGame.passCompletions);
    this.passYards.push(playerGame.passYards);
    this.passTds.push(playerGame.passTds);
    this.rushAttempts.push(playerGame.rushAttempts);
    this.rushYards.push(playerGame.rushYards);
    this.rushTds.push(playerGame.rushTds);
    this.interceptions.push(playerGame.interceptions);
    this.sacks.push(playerGame.sacks);
    this.passYardsRates.push(playerGame.passYardRate);
    this.passCompletionRates.push(playerGame.passCompletionRate);
  }

}
