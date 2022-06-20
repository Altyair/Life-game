/**
 * Creates an instance Data.
 *
 * @constructor
 * @this {Data}
 *
 */
export default class Data {
    constructor() {
        if (Data._instance) {
            return Data._instance;
        }
        Data._instance = this;

        this._cells = [];
        this._buffCells = [];
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
