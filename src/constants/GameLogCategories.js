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
  },
  'passRating': {
    id: 'passRating', shorthand: 'Rating', description: 'Passer Rating', type: 'decimal'
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
};

export const GameLogPassRatingCategories = {
  'completionsToAttemptsRating': {
    id: 'completionsToAttemptsRating',
    shorthand: 'Cmp to Att',
    description: 'Completions to Attempts Rating',
    type: 'decimal'
  },
  'yardsToAttemptsRating': {
    id: 'yardsToAttemptsRating',
    shorthand: 'Yds to Att',
    description: 'Yards to Attempts Rating',
    type: 'decimal'
  },
  'completionsToAttemptsRating': {
    id: 'completionsToAttemptsRating',
    shorthand: 'Cmp to Att',
    description: 'Completions to Attempts Rating',
    type: 'decimal'
  },
  'tdsToAttemptsRating': {
    id: 'tdsToAttemptsRating',
    shorthand: 'TD to Att',
    description: 'Touchdowns to Attempts Rating',
    type: 'decimal'
  },
  'intsToAttemptsRating': {
    id: 'intsToAttemptsRating',
    shorthand: 'Int to Att',
    description: 'Interceptions to Attempts Rating',
    type: 'decimal'
  },
  'passRating': {
    id: 'passRating',
    shorthand: 'Rating',
    description: 'Passer Rating',
    type: 'decimal'
  }
};

export const GameLogPassRatingScaleCategories = {
  'completionsToAttemptsRatingScale': {
    id: 'completionsToAttemptsRatingScale',
    shorthand: 'Cmp to Att',
    description: 'Completions to Attempts Rating Scale',
    type: 'decimal'
  },
  'yardsToAttemptsRatingScale': {
    id: 'yardsToAttemptsRatingScale',
    shorthand: 'Yds to Att',
    description: 'Yards to Attempts Rating Scale',
    type: 'decimal'
  },
  'completionsToAttemptsRatingScale': {
    id: 'completionsToAttemptsRatingScale',
    shorthand: 'Cmp to Att',
    description: 'Completions to Attempts Rating Scale',
    type: 'decimal'
  },
  'tdsToAttemptsRatingScale': {
    id: 'tdsToAttemptsRatingScale',
    shorthand: 'TD to Att',
    description: 'Touchdowns to Attempts Rating Scale',
    type: 'decimal'
  },
  'intsToAttemptsRatingScale': {
    id: 'intsToAttemptsRatingScale',
    shorthand: 'Int to Att',
    description: 'Interceptions to Attempts Rating Scale',
    type: 'decimal'
  },
  'passRatingScale': {
    id: 'passRatingScale',
    shorthand: 'Rating',
    description: 'Passer Rating Scale',
    type: 'decimal'
  }
};
