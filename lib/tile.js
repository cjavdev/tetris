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

  // Map local cells to cells relative to the position of the tile.
  cells() {
    var [x1, y1] = this.position;
    return _.map(this.localCells(), (cell) => {
      var [x2, y2] = cell;
      return [x1 + x2, y1 + y2];
    });
  }

  // What are the cells relative to this layout if pos is 0, 0?
  localCells() {
    var cells = [];
    _.each(this.orientedLayout(), (row, i) => {
      _.each(row, (mark, j) => {
        if (mark) {
          cells.push([i, j]);
        }
      });
    });
    return cells;
  }

  // Rotates the layout matrix based on orientation.
  // [[0, 1, 1, 0],
  //  [1, 1, 0, 0]]
  // ... to ...
  // [[1, 0],
  //  [1, 1],
  //  [0, 1],
  //  [0, 0]]
  orientedLayout() {
    var layout = this.layout;
    _.times(this.orientation / 90, () => {
      layout = rotate90(layout);
    });
    return layout;
  }

  rotateLeft() {
    this.orientation = (this.orientation + 270) % 360;
  }

  rotateRight() {
    this.orientation = (this.orientation + 90) % 360;
  }

  moveLeft() {
    var [x, y] = this.position;
    this.position = [x, y - 1];
  }

  moveRight() {
    var [x, y] = this.position;
    this.position = [x, y + 1];
  }

  fall() {
    var [x, y] = this.position;
    this.position = [x + 1, y];
  }
}

function rotate90(matrix) {
  // Transpose
  // Reverse each rows
  return reverseRows(transpose(matrix));
}

function reverseRows(matrix) {
  return _.map(matrix, (x) => _.reverse(x));
}

function transpose(matrix) {
  var result = [];
  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[i].length; j++) {
      if(!result[j]) {
        result[j] = [];
      }
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}

/* LAYOUTS are defined as 2 x 4 Arrays representing the squares filled in when
 * the piece is displayed. Every piece can be displayed on 2 x 3 except for the
 * I shape which is 4 squares in a line.
 */
export const LAYOUTS = {
  i: [[1, 1, 1, 1], [0, 0, 0, 0]],
  j: [[1, 1, 1, 0], [0, 0, 1, 0]],
  l: [[1, 1, 1, 0], [1, 0, 0, 0]],
  o: [[0, 1, 1, 0], [0, 1, 1, 0]],
  s: [[0, 1, 1, 0], [1, 1, 0, 0]],
  t: [[1, 1, 1, 0], [0, 1, 0, 0]],
  z: [[1, 1, 0, 0], [0, 1, 1, 0]],
};
