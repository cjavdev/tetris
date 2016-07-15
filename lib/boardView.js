import $ from 'jquery';

export class BoardView {
  constructor($el, board) {
    this.$el = $el;
    this.board = board;
  }

  render() {
    this.$el.empty();
    _.times(this.board.height, (row) => {
      var $row = $('<div>');
      _.times(this.board.width, (col) => {
        var cell = this.board.at([row, col]);
        $row.append('<div class="' + cell + '">');
      });
      this.$el.append($row);
    });
  }
}
