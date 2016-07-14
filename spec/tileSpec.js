import _ from 'lodash';
import {Tile} from '../js/tile.js';

describe('Tile', function() {
  it('is initialized with a layout, klass and position', function () {
    var t = new Tile([[1], [0]], 'test-klass', [0, 0]);
    expect(t.layout).toEqual([[1], [0]]);
    expect(t.klass).toEqual('test-klass');
    expect(t.position).toEqual([0, 0]);
    expect(t.orientation).toEqual(0);
  });

  it('localCells are calculated correctly for one point layout', function () {
    var t = new Tile([[1], [0]], 'test-klass', [0, 0]);
    var cells = t.localCells();
    expect(cells).toEqual([[0, 0]]);
  });

  it('localCells are calculated correctly for multiple point layouts', function () {
    var t = new Tile([[1, 1], [0, 1]], 'test-klass', [0, 0]);
    var cells = t.localCells();
    expect(cells).toEqual([[0, 0], [0, 1], [1, 1]]);
  });

  it('cells are calculated correctly for one point in layout', function () {
    var t = new Tile([[1], [0]], 'test-klass', [3, 5]);
    var cells = t.cells();
    expect(cells).toEqual([[3, 5]]);
  });

  it('cells are calculated correctly for multi-point in layout', function () {
    var t = new Tile([[0, 1, 1, 0], [1, 1, 0, 0]], 'test-klass', [3, 5]);
    var cells = t.cells();
    expect(cells).toEqual([[3, 6], [3, 7], [4, 5], [4, 6]]);
  });

  it('rotateLeft changes the orientation of the tile', function () {
    var t = new Tile([[0, 1, 1, 0], [1, 1, 0, 0]], 'test-klass', [3, 5]);
    t.rotateLeft();
    expect(t.orientation).toEqual(270);
    t.rotateLeft();
    expect(t.orientation).toEqual(180);
    t.rotateLeft();
    expect(t.orientation).toEqual(90);
    t.rotateLeft();
    expect(t.orientation).toEqual(0);
  });

  it('rotateRight changes the orientation of the tile', function () {
    var t = new Tile([[0, 1, 1, 0], [1, 1, 0, 0]], 'test-klass', [3, 5]);
    t.rotateRight();
    expect(t.orientation).toEqual(90);
    t.rotateRight();
    expect(t.orientation).toEqual(180);
    t.rotateRight();
    expect(t.orientation).toEqual(270);
    t.rotateRight();
    expect(t.orientation).toEqual(0);
  });

  it('orientedLayout is calculated correctly based on orientation', function () {
    var t = new Tile([[0, 1, 1, 0], [1, 1, 0, 0]], 'test-klass', [3, 5]);
    t.rotateRight();
    expect(t.orientedLayout()).toEqual([[1, 0], [1, 1], [0, 1], [0, 0]]);
  });

  it('cells are calculated correctly when the tile is rotated', function () {
    var t = new Tile([[0, 1, 1, 0], [1, 1, 0, 0]], 'test-klass', [3, 5]);
    t.rotateRight();
    expect(t.cells()).toEqual([[3, 5], [4, 5], [4, 6], [5, 6]]);
  });

  it('falls one row at a time', function () {
    var t = new Tile([[0, 1, 1, 0], [1, 1, 0, 0]], 'test-klass', [3, 5]);
    t.fall();
    expect(t.position).toEqual([4, 5]);
  });
});
