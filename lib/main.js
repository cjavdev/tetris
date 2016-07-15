import $ from 'jquery';
import {Board} from './board.js';
import {BoardView} from './boardView.js';
import {Game} from './game.js';

$(function () {
  var $board = $('.board');
  var board = new Board(20, 16);
  var boardView = new BoardView($board, board);
  var game = new Game(board);
  game.onStep(boardView.render.bind(boardView));
  game.spawnTile();
  setInterval(() => {
    game.step();
  }, 200);
  $('#rotate-left').on('click', () => game.rotateLeft());
  $('#rotate-right').on('click', () => game.rotateRight());
  $('#move-left').on('click', () => game.moveLeft());
  $('#move-right').on('click', () => game.moveRight());
});
