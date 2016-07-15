/* Class for managing state of the board.
 *
 * I decided to use two grids 1 is `grid` and is wiped clean at every step of
 * the game. This is the grid that falling tiles will exist on.
 *
 * The second is `frozenGrid` it is fixed and when tiles reach the bottom of the
 * screen and cannot fall any further, they "freeze" and are transfered from the
 * `grid` to the `frozenGrid`. The hope is that this will ease in rendering :)
 *
 */
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

  mark([x, y], klass) {
    this.grid[x][y] = klass;
  }

  lock([x, y], klass) {
    this.frozenGrid[x][y] = klass;
  }

  empty(position) {
    return !this.at(position);
  }

  at([x, y]) {
    return this.grid[x][y] || this.frozenGrid[x][y];
  }

  inBounds([x, y]) {
    return x >= 0 && x < this.height && y >= 0 && y < this.width;
  }

  atBottom(tile) {
    return _.some(tile.cells(), ([x, y]) => {
      return x + 1 >= this.height || !this.empty([x + 1, y]);
    });
  }

  freeze(tile) {
    _.each(tile.cells(), (cell) => this.lock(cell, tile.klass));
  }

  _valid(cell) {
    return this.inBounds(cell) && this.empty(cell);
  }

  fits(tile) {
    return _.every(tile.cells(), (cell) => {
      return _valid(cell);
    });
  }
}
