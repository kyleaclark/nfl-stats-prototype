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

    this.computePasserRating(
      this.passAttempts,
      this.passCompletions,
      this.passYards,
      this.passTds,
      this.interceptions
    );
  }

  computePasserRating(att, cmp, yards, tds, ints) {
    const maxValue = 2.375;
    const minValue = 0;
    const maxPassRatingValue = 158.33;

    function calcMinMaxVal(val) {
      val = Math.min(val, maxValue);
      val = Math.max(val, minValue);
      return val;
    }

    const a = calcMinMaxVal(((cmp / att) - .3) * 5);
    const b = calcMinMaxVal(((yards / att) - 3) * .25);
    const c = calcMinMaxVal(((tds / att) * 20));
    const d = calcMinMaxVal(2.375 - ((ints / att) * 25));
    const passRating = ((a + b + c + d) / 6) * 100;

    this.completionsToAttemptsRating = a;
    this.completionsToAttemptsRatingScale = (a / maxValue) * 100;
    this.yardsToAttemptsRating = b;
    this.yardsToAttemptsRatingScale = (b / maxValue) * 100;
    this.tdsToAttemptsRating = c;
    this.tdsToAttemptsRatingScale = (c / maxValue) * 100;
    this.intsToAttemptsRating = d;
    this.intsToAttemptsRatingScale = (d / maxValue) * 100;
    this.passRating = passRating;
    this.passRatingScale = (passRating / maxPassRatingValue) * 100;
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

}
