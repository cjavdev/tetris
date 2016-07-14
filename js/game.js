class Game {
  constructor() {
    console.log('hi there');
  }
}

class Board {
  constructor(tiles) {
    this.grid = _.map(_.times(20), () => { return _.times(20); });
    _.each(tiles, (t) => {
      var [x, y] = t.position;
      this.grid[x][y] = t;
    });
  }
}

class BoardView {
  constructor($el, board) {
    this.$el = $el;
    this.board = board;
  }

  render() {
    _.each(this.board.grid, (row) => {
      var $row = $('<div>');
      _.each(row, (tile, i) => {
        $row.append('<div class="tile">' + tile);
      }, this);
      this.$el.append($row);
    }, this)
  }
}
