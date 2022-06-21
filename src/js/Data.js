import CustomEventTarget from './CustomEventTarget';

/**
 * Creates an instance Data.
 *
 * @constructor
 * @this {Data}
 *
 */
export default class Data extends CustomEventTarget {
    constructor() {
        if (Data._instance) {
            return Data._instance;
        }
        super();
        Data._instance = this;

        this._cells = [];
        this._buffCells = [];
        this._historyCells = [];
        this._numberOfCells = 25;
        this._cellSize = 20;
    }

    get numberOfCells() {
        return this._numberOfCells;
    }

    set numberOfCells(value) {
        if (value < 100) {
            this._cellSize = 20;
        } else if (value < 500) {
            this._cellSize = 8;
        } else if (value < 1000) {
            this._cellSize = 4;
        } else {
            this._cellSize = 2;
        }

        this._numberOfCells = value;

        this._fire('changeNumberOfCells', {value});
    }

    get cellSize() {
        return this._cellSize;
    }

    set cellSize(value) {
        this._cellSize = value;
    }

    static getInstance() {
        return Data._instance || new Data();
    }

    setCells(cells) {
        this._cells = cells;
    }

    setBuffCells(buffCells) {
        this._buffCells = buffCells;
    }

    getCells() {
        return this._cells;
    }

    getBuffCells() {
        return this._buffCells;
    }

    pushToHistory(cells) {
        if (this._historyCells.length >= 3) {
            this._historyCells.pop();
        }
        this._historyCells.push(cells);
    }

    compareCellsInHistory(buffCells) {
        for(let i = 0; i < this._historyCells.length; i ++) {
            if (JSON.stringify(buffCells) === JSON.stringify(this._historyCells[i])) {
                return true;
            }
        }
        return false;
    }
}
