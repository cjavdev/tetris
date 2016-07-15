# Simple [Tetris](https://en.wikipedia.org/wiki/Tetris)

It'd been a little while since building a game in js. This was a nice refresher :).

There are 3 major components: `Game`, `Board` and `Tile` (a.k.a. Tetrimino).

A Tetrimino is one of the shapes that fall down.

The shape of a `Tile` is represented using a 2 x 4 array of 1's and 0's. So the `S` layout looks like: `[[1, 1, 0, 0], [0, 1, 1, 0]]`. The orientation is a number of degrees of rotation (0, 90, 180, 270). Finally, the klass is an identifier used to reference the layout and also is used as the CSS class to style the cells occupied by a Tile's squares.

An instance of a `Board` is essentially a 2 x height x width grid where one of
the layers is "frozen" and one of the layers is "dynamic." The frozen layer
consistes of cells that were populated when a `Tile` reached the bottom of the
grid. The dynamic layer is the layer that is reset at the start of every game
step.

The Game class is a sort of mediator that coordinates which tiles are placed on
the board and how those tiles are moved at each step of the game.
