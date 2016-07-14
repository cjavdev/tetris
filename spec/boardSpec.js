import _ from 'lodash';
import {Tile} from '../js/board.js';

describe('Board', function() {
  it('is initialized with a dimension', function () {
    var b = new Board(5, 6);
    b.width = 5;
    b.height = 6;
  });
});
