export default class GameLog {

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
    this.passYardsRate = GameLog.calcPassYardsRate(this.passAttempts, this.passYards);
    this.passCompletionRate = GameLog.calcPassCompletionRate(this.passAttempts, this.passCompletions);
    this.adjustedPassYardsRate = GameLog.calcAdjustedPassYardsRate(
      this.passAttempts, this.passYards, this.passTds, this.interceptions
    );
  }

  static calcPassYardsRate(passAttempts, passYards) {
    return passYards / passAttempts;
  }

  static calcPassCompletionRate(passAttempts, passCompletions) {
    return passCompletions / passAttempts;
  }

  static calcAdjustedPassYardsRate(passAttempts, passYards, passTds, ints) {
    return ((passYards + (20 * (passTds)) - (45 * (ints))) / passAttempts);
  }

}
