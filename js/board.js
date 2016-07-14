import _ from 'lodash';

export class Board {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.mid = _.floor(width / 2);
    this.resetGrid();
    this.frozenGrid = _.map(_.times(height), () => _.times(width, () => null));
  }

  resetGrid() {
    this.grid = _.map(_.times(this.height), () => _.times(this.width, () => null));
  }

  place(tile) {
    // place a tile on the grid
    _.each(tile.cells(), (position) => this.mark(position, tile.klass));
  }

  mark(position, klass) {
    var [x, y] = position;
    this.grid[x][y] = klass;
  }

  empty(position) {
    return !this.at(position);
  }

  at(position) {
    var [x, y] = position;
    return this.grid[x][y];
  }

  atBottom(tile) {
    return _.some(tile.cells(), ([x, y]) => {
      return x + 1 >= this.height || !this.empty([x + 1, y]);
    });
  }

  freeze(tile) {
    var [x, y] = tile.position;
    this.frozenGrid[x][y] = tile.klass;
  }

  fits(position, tile) {
    // if the tile fits at the position
  }
}
