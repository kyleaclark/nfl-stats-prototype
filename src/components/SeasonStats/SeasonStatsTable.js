import React, { Component } from 'react';
import { Avatar, Table, Tooltip } from 'antd';

import { GameLogPassCategories, GameLogRushCategories } from '../../constants/GameLogCategories';

const gameLogCategories = [GameLogPassCategories, GameLogRushCategories];

export default class GameLogTable extends Component {

  _generateStatGroupData(
    statsGroup,
    statId,
    statLabel,
    ignoreDecimal,
    ignorePercentage
  ) {
    let statsData = {
      'key': statId,
      'stat': statLabel
    };

    Object.values(gameLogCategories).forEach(gameLogCategoryGroup => {
      Object.values(gameLogCategoryGroup).forEach(gameLogCategory => {
        if ((ignoreDecimal & gameLogCategory.type === 'decimal') |
            (ignorePercentage & gameLogCategory.type === 'percentage')) {
          statsData[gameLogCategory.id] = 'n/a';
        } else {
          statsData[gameLogCategory.id] = statsGroup[gameLogCategory.id];
        }
      });
    });

    return statsData;
  }

  _generateSeasonStatsTableData(playerSeason) {
    const sumStats = playerSeason.sumStats;
    const minStats = playerSeason.minStats;
    const maxStats = playerSeason.maxStats;
    const avgStats = playerSeason.avgStats;
    const medStats = playerSeason.medStats;
    const stdStats = playerSeason.stdStats;

    let tableData = [];
    tableData.push(this._generateStatGroupData(sumStats, 'sum', 'Season Total', true, true));
    tableData.push(this._generateStatGroupData(avgStats, 'avg', 'Season Average', false, false));
    tableData.push(this._generateStatGroupData(medStats, 'med', 'Season Median', false, false));
    tableData.push(this._generateStatGroupData(maxStats, 'max', 'Game High', false, false));
    tableData.push(this._generateStatGroupData(minStats, 'min', 'Game Low', false, false));
    tableData.push(this._generateStatGroupData(stdStats, 'std', 'Standard Deviation by Game', false, false));

    return tableData;
  }

  _generateColumn(key, name, title, renderFn) {
    const column = {
      title: this._renderColumnName(name, title),
      dataIndex: key,
      key: key
    }

    if (renderFn) {
      column.render = (data) => renderFn(data)
    }

    return column;
  }

  // _generateColumns() {
  //   const renderFnMap = {
  //     'date': this._renderDateValue,
  //     'decimal': this._renderDecimalValue,
  //     'int': null,
  //     'percentage': this._renderPercentageValue,
  //     'text': null
  //   };
  //
  //   return [{
  //     this._generateColumn('category', 'Category', 'Stat Category', null),
  //     this._generateColumn('sum', 'Total', 'Total Sum', null),
  //     this._generateColumn('min', 'Minimum', 'Minimum Value', null),
  //     this._generateColumn('max', 'Maximum', 'Maximum Value', null),
  //     this._generateColumn('avg', 'Average', 'Average Value', this._renderDecimalValue),
  //     this._generateColumn('med', 'Median', 'Median Value', null),
  //     this._generateColumn('std', 'Standard Variation', 'Standard Deviation', null)
  //   }]
  // }

  _generateDefaultColumn(key, name, title, renderFn) {
    const column = {
      title: this._renderColumnName(name, title),
      dataIndex: key,
      key: key
    }

    if (renderFn) {
      column.render = (data) => renderFn(data)
    }

    return column;
  }

  _generateColumnsByCategory(gameLogCategories) {
    const renderFnMap = {
      'decimal': this._renderDecimalValue,
      'int': this._renderIntValue,
      'percentage': this._renderPercentageValue
    };

    let columns = [];
    Object.values(gameLogCategories).forEach((category) => {
      columns.push(this._generateDefaultColumn(
        category.id, category.shorthand, category.description, renderFnMap[category.type]
      ));
    });

    return columns;
  }

  _generateColumns() {
    return [{
      title: 'Statistical Measure',
      children: [
        this._generateDefaultColumn('stat', 'Stat Type', 'Statistical Measure', null)
      ]
    }, {
      title: 'Passing',
      children: this._generateColumnsByCategory(GameLogPassCategories)
    }, {
      title: 'Rushing',
      children: this._generateColumnsByCategory(GameLogRushCategories)
    }]
  }

  _renderColumnName(name, title) {
    return (
      <Tooltip title={title}>
        <span>{name}</span>
      </Tooltip>
    )
  }

  _renderPercentageValue(val) {
    if (typeof val === 'string') {
      return val;
    }

    return (val * 100).toFixed(2);
  }

  _renderDecimalValue(val) {
    if (typeof val === 'string') {
      return val;
    }

    return val.toFixed(2);
  }

  _renderIntValue(val) {
    if (Number.isInteger(val)) {
      return val;
    }

    return val.toFixed(2);
  }

  render() {
    const columns = this._generateColumns();
    let tableData = null;

    if (this.props.playerSeason) {
      tableData = this._generateSeasonStatsTableData(this.props.playerSeason);
    }

    return (
      <div>
        <Table
          dataSource={tableData}
          columns={columns}
          pagination={false}
          size={'small'}
          style={{ border: '0' }} />
      </div>
    )
  }
}
