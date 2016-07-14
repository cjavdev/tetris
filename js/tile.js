/* Class representing a Tetrimino. Named Tile because Tetrimino sucks to type.
 *
 * @param {array<array>} layout - 2d array of 1's and 0's representing how the
 * object looks. [[0, 1, 1, 0], [1, 1, 0, 0]] is the S tile's layout.
 * @param {string} klass - css class of the tile.
 * @param {int} orientation - 0, 90, 180, 270 are valid orientations.
 * @param {array} position - x, y coordinates on the board that this tile's
 * pivot point is at. I think the pivot point will be 1, 1 on the layout...
 * we'll see.
 */
import _ from 'lodash';

export class Tile {
  constructor(layout, klass, position, orientation = 0) {
    this.layout = layout;
    this.klass = klass;
    this.position = position;
    this.orientation = orientation;
  }

  cells() {
    var [x, y] = this.position;
    var cells = [];

    return cells;
  }

  // What are the cells relative to this layout if pos is 0, 0?
  _localCells() {

  }
}

export const TILES = {
  s: [[0, 1, 1, 0], [1, 1, 0, 0]]
};
