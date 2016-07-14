import _ from 'lodash';
import {Tile} from '../js/tile.js';

describe('Tile', function() {
  it('is initialized with a layout, klass and position', function () {
    var t = new Tile([[1], [0]], 'test-klass', [0, 0]);
    expect(t.layout).toEqual([[1], [0]]);
    expect(t.klass).toEqual('test-klass');
    expect(t.position).toEqual([0, 0]);
    // default orientation to zero
    expect(t.orientation).toEqual(0);
  });

  it('cells are calculated correctly for one point in layout', function () {
    var t = new Tile([[1], [0]], 'test-klass', [0, 0]);
    var cells = t.cells();
    expect(cells).toEqual([[0, 0]]);
  });
});
