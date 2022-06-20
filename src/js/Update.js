import CONFIG from '../config.json';
import Data from "./Data";

const CELL_SIZE = CONFIG.CELL_SIZE;

/**
 * Creates an instance Update.
 *
 * @constructor
 * @this {Update}
 *
 */
export default class Update {
    constructor(grid, game) {
        this._data = Data.getInstance();
        this._grid = grid;
        this._game = game;
    }

    clear () {
        this._game.getCanvas().clearRect(0, 0, this._grid.getWidth(), this._grid.getHeight());
    };

    fill () {
        const cells = this._data.getCells();

        this.clear();

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

        this.clear();

        for (let i = 0; i < this._grid.getSizeX(); i += 1) {
            for (let j = 0; j < this._grid.getSizeY(); j += 1) {
                cells[i][j] = Boolean([true, false][Math.round(Math.random())]);

                if (cells[i][j]) {
                    this._fillCell(i, j);
                }
            }
        }
    };

    autoplay () {
        const play = () => {
            this.fill();
            requestAnimationFrame(play);
        }

        play();
    };

    stop () {

    };

    _fillCell (x, y) {
        this._game.getCanvas().fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE + 1, CELL_SIZE + 1);
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
