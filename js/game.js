/* Game class manages falling tiles and placing them on the board.
 */
import _ from 'lodash';
import {Tile} from '../js/tile.js';

const LAYOUTS = {
  i: [[1, 1, 1, 1], [0, 0, 0, 0]],
  j: [[1, 1, 1, 0], [0, 0, 1, 0]],
  l: [[1, 1, 1, 0], [1, 0, 0, 0]],
  o: [[0, 1, 1, 0], [0, 1, 1, 0]],
  s: [[0, 1, 1, 0], [1, 1, 0, 0]],
  t: [[1, 1, 1, 0], [0, 1, 0, 0]],
  z: [[1, 1, 0, 0], [0, 1, 1, 0]],
};

export class Game {
  constructor(board) {
    this.board = board;
    this.fallingTiles = [];
  }

  spawnTile() {
    var klass = _.sample(_.keys(LAYOUTS));
    var tile = new Tile(LAYOUTS[klass], klass, [0, this.board.mid]);
    this.fallingTiles.push(tile);
    this.board.place(tile);
    return tile;
  }

  step() {
    this.board.resetGrid();
    _.each(this.fallingTiles, (tile) => {
      if (this.board.atBottom(tile)) {
        this.board.freeze(tile);
        _.remove(this.fallingTiles, tile);
      } else {
        tile.fall();
      }
    }, this);
  }
}

// class BoardView {
//   constructor($el, board) {
//     this.$el = $el;
//     this.board = board;
//   }
//
//   render() {
//     _.each(this.board.grid, (row) => {
//       var $row = $('<div>');
//       _.each(row, (tile, i) => {
//         $row.append('<div class="tile">' + tile);
//       }, this);
//       this.$el.append($row);
//     }, this)
//   }
// }
