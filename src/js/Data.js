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
        this._numberOfCells = 25;
        this._cellSize = 20;
    }

    get numberOfCells() {
        return this._numberOfCells;
    }

    set numberOfCells(value) {
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
}
