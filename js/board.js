import _ from 'lodash';

export class Board {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.mid = _.floor(width / 2);
    this.grid = _.map(_.times(height), () => _.times(width, () => null));
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

  fits(position, tile) {
    // if the tile fits at the position
  }
}
