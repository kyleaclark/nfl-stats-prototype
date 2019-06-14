import GameLog from './GameLog';

export default class PlayerSeason {

  constructor(seasonYear) {
    this.seasonYear = seasonYear;
    this.intoSeasonProps();
  }

  intoSeasonProps() {
    this.gameLogs = [];
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

  computeGameInfo(gameLogInfo) {
    const gameLog = new GameLog(gameLogInfo);
    this.gameLogs.push(gameLog);

    // process game details and counting stats
    this.gamesPlayed += 1;
    this.weeks.push(gameLog.week);
    this.gameDates.push(gameLog.gameDate);
    this.teams.push(gameLog.team)
    this.teamImageUrls.push(gameLog.teamImageUrl);
    this.opponents.push(gameLog.opponent);
    this.opponentImageUrls.push(gameLog.opponentImageUrl);
    this.passAttempts.push(gameLog.passAttempts);
    this.passCompletions.push(gameLog.passCompletions);
    this.passYards.push(gameLog.passYards);
    this.passTds.push(gameLog.passTds);
    this.rushAttempts.push(gameLog.rushAttempts);
    this.rushYards.push(gameLog.rushYards);
    this.rushTds.push(gameLog.rushTds);
    this.interceptions.push(gameLog.interceptions);
    this.sacks.push(gameLog.sacks);
    this.passYardsRates.push(gameLog.passYardRate);
    this.passCompletionRates.push(gameLog.passCompletionRate);
  }

}
