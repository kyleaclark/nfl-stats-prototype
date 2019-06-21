import { max, mean, median, min, standardDeviation, sum } from 'simple-statistics';

import {
  GameLogInfoCategories,
  GameLogPassCategories,
  GameLogRushCategories,
  GameLogPassRatingCategories,
  GameLogPassRatingScaleCategories
} from '../constants/GameLogCategories';
import GameLog from './GameLog';

const gameLogCategories = [
  GameLogInfoCategories,
  GameLogPassCategories,
  GameLogRushCategories,
  GameLogPassRatingCategories,
  GameLogPassRatingScaleCategories
];

export default class PlayerSeason {

  constructor(seasonYear) {
    this.seasonYear = seasonYear;
    this.intoSeasonProps();
  }

  intoSeasonProps() {
    this.gameLogs = [];
    this.seasonCategories = {};

    gameLogCategories.forEach(categoryGroup => {
      Object.values(categoryGroup).forEach(category => {
        this.seasonCategories[category.id] = [];
      });
    });

    this.seasonCategories['teamImageUrl'] = [];
    this.seasonCategories['opponentImageUrl'] = [];

    this.sumStats = {};
    this.minStats = {};
    this.maxStats = {};
    this.avgStats = {};
    this.medStats = {};
    this.stdStats = {};
  }

  computeGameInfo(gameLogInfo) {
    this.gameLogs.push(new GameLog(gameLogInfo));
  }

  computeSeasonStats() {
    this.gameLogs.forEach(gameLog => {
      Object.entries(gameLog).forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        this.seasonCategories[key].push(value);
      });
    });

    gameLogCategories.forEach(categoryGroup => {
      Object.values(categoryGroup).forEach(category => {
        const key = category.id;
        const stats = this.seasonCategories[key];
        this.sumStats[key] = sum(stats);
        this.minStats[key] = min(stats);
        this.maxStats[key] = max(stats);
        this.avgStats[key] = mean(stats);
        this.medStats[key] = median(stats);
        this.stdStats[key] = standardDeviation(stats);
      });
    });
  }

}
