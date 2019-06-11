export default class PlayerSeason {

  constructor(seasonYear) {
    this.seasonYear = seasonYear;
    this.intoSeasonProps();
  }

  intoSeasonProps() {
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
    this.rushCarries = [];
    this.rushYards = [];
    this.rushTds = [];
    this.interceptions = [];
    this.sacks = [];
    this.passYardsRates = [];
    this.passCompletionRates = [];
  }

  computeGameInfo(gameInfo) {
    const weekIndex = this.gamesPlayed;

    // process game details and counting stats
    this.gamesPlayed += 1;
    this.weekIndexKeyMap[gameInfo.week] = weekIndex;
    this.weeks.push(gameInfo.week);
    this.gameDates.push(gameInfo.gamedate);
    this.teams.push(gameInfo.team)
    this.teamImageUrls.push(gameInfo.teamimage);
    this.opponents.push(gameInfo.opponent);
    this.opponentImageUrls.push(gameInfo.opponentimage);
    this.passAttempts.push(gameInfo.att);
    this.passCompletions.push(gameInfo.cmp);
    this.passYards.push(gameInfo.psyds);
    this.passTds.push(gameInfo.pstd);
    this.rushCarries.push(gameInfo.rush);
    this.rushYards.push(gameInfo.rshyds);
    this.rushTds.push(gameInfo.rshtd);
    this.interceptions.push(gameInfo.int);
    this.sacks.push(gameInfo.sack);

    // process rate stats
    this.passYardsRates.push(
      this.calcPassYardsRate(this.passAttempts[weekIndex], this.passYards[weekIndex])
    )
    this.passCompletionRates.push(
      this.calcPassCompletionRate(this.passAttempts[weekIndex], this.passCompletions[weekIndex])
    )
  }

  static calcPassYardsRate(passAttempts, passYards) {
    return passYards / passAttempts;
  }

  static calcPassCompletionRate(passAttempts, passCompletions) {
    return passCompletions / passAttempts;
  }

}
