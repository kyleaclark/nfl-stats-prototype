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
    this.passRating = GameLog.calcPassRating(
      this.passAttempts, this.passCompletions, this.passYards, this.passTds, this.interceptions
    );
  }

  static calcPassYardsRate(att, yards) {
    return yards / att;
  }

  static calcPassCompletionRate(att, cmp) {
    return cmp / att;
  }

  static calcAdjustedPassYardsRate(att, yards, tds, ints) {
    return ((yards + (20 * (tds)) - (45 * (ints))) / att);
  }

  static calcPassRating(att, cmp, yards, tds, ints) {
    function calcMinMaxVal(val) {
      val = Math.min(val, 2.375);
      val = Math.max(val, 0);
      return val;
    }

    const a = calcMinMaxVal(((cmp / att) - .3) * 5);
    const b = calcMinMaxVal(((yards / att) - 3) * .25);
    const c = calcMinMaxVal(((tds / att) * 20));
    const d = calcMinMaxVal(2.375 - ((ints / att) * 25));

    return ((a + b + c + d) / 6) * 100;
  }

}
