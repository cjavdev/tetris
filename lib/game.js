/* Game class manages falling tiles and placing them on the board.
 */
import _ from 'lodash';
import {LAYOUTS, Tile} from '../lib/tile.js';

export class Game {
  constructor(board) {
    this.board = board;
    this.fallingTile = null;
    this.onStepCallbacks = [];
  }

  spawnTile() {
    var klass = _.sample(_.keys(LAYOUTS));
    var tile = new Tile(LAYOUTS[klass], klass, [-1, this.board.mid - 2]);
    this.fallingTile = tile;
    return tile;
  }

  onStep(fn) {
    this.onStepCallbacks.push(fn);
  }

  rotateRight() {
    this.fallingTile.rotateRight();
  }

  rotateLeft() {
    this.fallingTile.rotateLeft();
  }

  moveLeft() {
    this.fallingTile.moveLeft();
  }

  moveRight() {
    this.fallingTile.moveRight();
  }

  step() {
    this.board.resetGrid();
    var tile = this.fallingTile;
    if (this.board.atBottom(tile)) {
      this.board.freeze(tile);
      this.spawnTile();
    } else {
      tile.fall();
      this.board.place(tile);
    }
    _.each(this.onStepCallbacks, (fn) => fn());
  }
}
