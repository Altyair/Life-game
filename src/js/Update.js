import CONFIG from '../config.json';
import Data from "./Data";
import CustomEventTarget from './CustomEventTarget';

/**
 * Creates an instance Update.
 *
 * @constructor
 * @this {Update}
 *
 */
export default class Update extends CustomEventTarget {
    constructor(grid, game) {
        super();
        this._data = Data.getInstance();
        this._grid = grid;
        this._game = game;
        this._play = false;
        this._canPlay = false;
    }

    _cancelRequestAnimFrame() {
        return window.cancelAnimationFrame              ||
            window.webkitCancelRequestAnimationFrame    ||
            window.mozCancelRequestAnimationFrame       ||
            window.oCancelRequestAnimationFrame         ||
            window.msCancelRequestAnimationFrame        ||
            clearTimeout
    }

    set canPlay(value) {
        this._canPlay = value;
    }

    get canPlay() {
        return this._canPlay;
    }

    updateNumberOfCells(value) {
        this._data.numberOfCells = value;

        this._fire('change_number_of_cells');
    }

    reset () {
        this._cancelRequestAnimFrame()(this._requestAnimationFrameId);
        this._play = false;
        this._game.clear();

        this._fire('reset');
    };

    fill () {
        const cells = this._data.getCells();

        this._game.clear();

        for (let i = 0; i < this._grid.getSizeX(); i += 1) {
            for (let j = 0; j < this._grid.getSizeY(); j += 1) {
                if (cells[i][j]) {
                    this._fillCell(i, j);
                }
            }
        }

        this._cells();
    };

    randomFill () {
        const cells = this._data.getCells();

        this._game.clear();

        for (let i = 0; i < this._grid.getSizeX(); i += 1) {
            for (let j = 0; j < this._grid.getSizeY(); j += 1) {
                cells[i][j] = Boolean([true, false][Math.round(Math.random())]);

                if (cells[i][j]) {
                    this._fillCell(i, j);
                }
            }
        }

        this._fire('randomFill');
    };

    autoplay () {
        const play = () => {
            this.fill();
            this._requestAnimationFrameId = requestAnimationFrame(play);
        }

        if (this._canPlay) {
            play();
            this._play = true;
            this._fire('play');
        }
    };

    pause () {
        this._cancelRequestAnimFrame()(this._requestAnimationFrameId);
        this._play = false;

        this._fire('pause');
    };

    _fillCell (x, y) {
        this._game.getCanvas().fillRect(x * this._data.cellSize, y * this._data.cellSize, this._data.cellSize + 1, this._data.cellSize + 1);
    };

    _getLivingNeighbors (x, y) {
        const cells = this._data.getCells();
        let count = 0,
            sx = this._grid.getSizeX(),
            sy = this._grid.getSizeY();

        // Проверяем верхнюю левую ячейку если XY - верхний левый угол
        if (x === 0 && y === 0) {
            if (cells[sx - 1][sy - 1] === true) {
                count += 1;
            }
        }

        // Проверяем верхнюю левую ячейку если XY не является верхним левым углом
        if (x !== 0 && y !== 0) {
            if (cells[x - 1][y - 1] === true) {
                count += 1;
            }
        }

        // Проверяем верхнюю левую ячейку если X левая граница и Y не верхняя граница
        if (x === 0 && y !== 0) {
            if (cells[sx - 1][y - 1] === true) {
                count += 1;
            }
        }

        // Проверяем верхнюю ячейку если Y не верхняя граница
        if (y !== 0) {
            if (cells[x][y - 1] === true) {
                count += 1;
            }
        }

        // Проверяем верхнюю ячейку если Y верхняя граница
        if (y === 0) {
            if (cells[x][sy - 1] === true) {
                count += 1;
            }
        }

        // Проверяем верхнюю правую ячейку если XY - верхний правый угол
        if (x === sx - 1 && y === 0) {
            if (cells[0][sy - 1] === true) {
                count += 1;
            }
        }

        //Проверяем верхнюю правую ячейку если XY не является верхним правым углом
        if (x !== sx - 1 && y !== 0) {
            if (cells[x + 1][y - 1] === true) {
                count += 1;
            }
        }

        // Проверяем верхнюю правую ячейку если X правая граница и Y не верхняя граница
        if (x === sx - 1 && y !== 0) {
            if (cells[0][y - 1] === true) {
                count += 1;
            }
        }

        // Проверяем левую ячейку если X не является левой границей
        if (x !== 0) {
            if (cells[x - 1][y] === true) {
                count += 1;
            }
        }

        // Проверяем левую ячейку если X - это крайняя левая ячейка
        if (x === 0) {
            if (cells[sx - 1][y] === true) {
                count += 1;
            }
        }

        // Проверяем правую ячейку если X не является правой границей
        if (x !== sx - 1) {
            if (cells[x + 1][y] === true) {
                count += 1;
            }
        }

        // Проверяем правую ячейку если X - это крайняя правая ячейка
        if (x === sx - 1 ) {
            if (cells[0][y] === true) {
                count += 1;
            }
        }

        // Проверяем нижнюю левую ячейку если XY не нижний левый угол
        if (x !== 0 && y !== sy - 1) {
            if (cells[x - 1][y + 1] === true) {
                count += 1;
            }
        }

        // Проверяем нижнюю левую ячейку если XY нижний левый угол
        if (x === 0 && y === sy - 1) {
            if (cells[sx - 1][0] === true) {
                count += 1;
            }
        }

        // Проверяем нижнюю левую ячейку если Y нижняя граница и X не левая граница
        if (y === sy - 1 && x !== 0) {
            if (cells[x - 1][0] === true) {
                count += 1;
            }
        }

        // Проверяем нижнюю ячейку если Y не нижняя граница
        if (y !== sy - 1) {
            if (cells[x][y + 1] === true) {
                count += 1;
            }
        }

        // Проверяем нижнюю ячейку если Y нижняя граница
        if (y === sy - 1) {
            if (cells[x][0] === true) {
                count += 1;
            }
        }

        // Проверяем нижнюю правую ячейку если XY не правый нижний угол
        if (x !== sx - 1 && y !== sy - 1) {
            if (cells[x + 1][y + 1] === true) {
                count += 1;
            }
        }

        // Проверяем нижнюю правую ячейку если это правый нижний угол
        if (x === sx - 1 && y === sy - 1) {
            if (cells[0][0] === true) {
                count += 1;
            }
        }

        // Проверяем нижнюю правую ячейку если Y нижняя граница и X не правая граница
        if (y === sy - 1 && x !== sx - 1) {
            if (cells[x + 1][0] === true) {
                count += 1;
            }
        }

        return count;
    };

    _cells () {
        const cells = this._data.getCells();
        const buffCells = this._data.getBuffCells();

        for (let i = 0; i < this._grid.getSizeX(); i += 1) {
            for (let j = 0; j < this._grid.getSizeY(); j += 1) {

                let result = false;
                const isAlive = cells[i][j];
                const count = this._getLivingNeighbors(i, j);

                if (isAlive && count < 2) {
                    result = false;
                }
                if (isAlive && (count === 2 || count === 3)) {
                    result = true;
                }
                if (isAlive && count > 3) {
                    result = false;
                }
                if (!isAlive && count === 3) {
                    result = true;
                }

                buffCells[i][j] = result;
            }
        }

        for (let i = 0; i < this._grid.getSizeX(); i += 1) {
            for (let j = 0; j < this._grid.getSizeY(); j += 1) {
                cells[i][j] = buffCells[i][j];
            }
        }
    };
}
