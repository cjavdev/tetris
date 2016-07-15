import $ from 'jquery';
import {Board} from './board.js';
import {BoardView} from './boardView.js';
import {Game} from './game.js';
import {key} from 'github:w1zeman1p/keymaster@1.6.3.js';

$(function () {
  var $board = $('.board');
  var board = new Board(20, 14);
  var boardView = new BoardView($board, board);
  var game = new Game(board);
  game.onStep(boardView.render.bind(boardView));
  game.spawnTile();
  setInterval(() => {
    game.step();
  }, 200);

  key('h, left', () => game.moveLeft());
  key('l, right', () => game.moveRight());
  key('k, space', () => game.rotateRight());
  key('j, down', () => game.step());
});
