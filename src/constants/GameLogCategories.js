export const GameLogInfoCategories = {
  'week': {
    id: 'week', shorthand: 'Wk', description: 'Week Number', type: 'text'
  },
  'gameDate': {
    id: 'gameDate', shorthand: 'Date', description: 'Game Date', type: 'date'
  },
  'team': {
    id: 'team', shorthand: 'Tm', description: 'Team', type: 'avatar'
  },
  'opponent': {
    id: 'opponent', shorthand: 'Opp', description: 'Opponent', type: 'avatar'
  }
};

export const GameLogPassCategories = {
  'passAttempts': {
    id: 'passAttempts', shorthand: 'Att', description: 'Passing Attempts', type: 'int'
  },
  'passCompletions': {
    id: 'passCompletions', shorthand: 'Cmp', description: 'Completed Passes', type: 'int'
  },
  'passCompletionRate': {
    id: 'passCompletionRate', shorthand: 'Cmp%', description: 'Completion Percentage', type: 'percentage'
  },
  'passYards': {
    id: 'passYards', shorthand: 'Yds', description: 'Passing Yards', type: 'int'
  },
  'passTds': {
    id: 'passTds', shorthand: 'TD', description: 'Passing Tds', type: 'int'
  },
  'interceptions': {
    id: 'interceptions', shorthand: 'Int', description: 'Interceptions Thrown', type: 'int'
  },
  'sacks': {
    id: 'sacks', shorthand: 'Sk', description: 'Times Sacked', type: 'int'
  },
  'passYardsRate': {
    id: 'passYardsRate', shorthand: 'Y/A', description: 'Passing Yards Per Attempt', type: 'decimal'
  },
  'adjustedPassYardsRate': {
    id: 'adjustedPassYardsRate', shorthand: 'AY/A', description: 'Adjusted Passing Yards Per Attempt', type: 'decimal'
  }
};

export const GameLogRushCategories = {
  'rushAttempts': {
    id: 'rushAttempts', shorthand: 'Att', description: 'Rushing Attempts', type: 'int'
  },
  'rushYards': {
    id: 'rushYards', shorthand: 'Yds', description: 'Rushing Yards', type: 'int'
  },
  'rushTds': {
    id: 'rushTds', shorthand: 'TD', description: 'Rushing Tds', type: 'int'
  }
}
