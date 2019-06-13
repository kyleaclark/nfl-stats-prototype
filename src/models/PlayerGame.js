export default class PlayerGame {

  constructor(gameInfo) {
    this.week = gameInfo.week;
    this.gameDate = gameInfo.gamedate;
    this.team = gameInfo.team;
    this.teamImageUrl = gameInfo.teamimage;
    this.opponent = gameInfo.opponent;
    this.opponentImageUrl = gameInfo.opponentimage;
    this.passAttempts = gameInfo.att;
    this.passCompletions = gameInfo.cmp;
    this.passYards = gameInfo.psyds;
    this.passTds = gameInfo.pstd;
    this.rushAttempts = gameInfo.rush;
    this.rushYards = gameInfo.rshyds;
    this.rushTds = gameInfo.rshtd;
    this.interceptions = gameInfo.int;
    this.sacks = gameInfo.sack;

    // process rate stats
    this.passYardsRate= PlayerGame.calcPassYardsRate(this.passAttempt, this.passYards)
    this.passCompletionRate = PlayerGame.calcPassCompletionRate(this.passAttempts, this.passCompletions)
  }

  static calcPassYardsRate(passAttempts, passYards) {
    return passYards / passAttempts;
  }

  static calcPassCompletionRate(passAttempts, passCompletions) {
    return passCompletions / passAttempts;
  }

}
