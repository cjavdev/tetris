import _ from 'lodash';
import {Board} from '../lib/board.js';
import {Game} from '../lib/game.js';
import {Tile} from '../lib/tile.js';

describe('Game', function() {
  it('is initialized with a board', function () {
    var fakeBoard = {};
    var g = new Game(fakeBoard);
    expect(g.board).toEqual(fakeBoard);
    expect(g.fallingTiles.length).toEqual(0);
  });

  it('spawnTile returns a random tile', function () {
    var fakeBoard = {mid: 5, place: _.identity};
    var g = new Game(fakeBoard);
    var tile = g.spawnTile();
    expect(tile.position[0]).toEqual(0);
    expect(tile.position[1]).toEqual(5);
    expect(g.fallingTiles).toEqual([tile]);
  });

  it('step moves all falling tiles down', function () {
    var fakeBoard = new Board(5, 10);
    var g = new Game(fakeBoard);
    var tile = g.spawnTile();
    expect(tile.position[0]).toEqual(0);
    expect(tile.position[1]).toEqual(5);
    g.step();
    expect(tile.position[0]).toEqual(1);
    expect(tile.position[1]).toEqual(5);
  });
});
