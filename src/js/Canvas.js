import Data from "./Data";

/**
 * Creates an instance Canvas.
 *
 * @constructor
 * @this {Canvas}
 *
 */
export default class Canvas {
    constructor(options) {
        this._data = Data.getInstance();
        if (options === undefined || options.name === undefined) {
            throw new Error('Canvas tag name not passed');
        }

        this._canvasWrapper = document.getElementById(options.name);
        this._canvas = this._canvasWrapper.getContext('2d');
    }

    setSize() {
        const size = this._data.numberOfCells * this._data.cellSize;
        this._canvasWrapper.width = size;
        this._canvasWrapper.height = size;
        this._canvas.width = size;
        this._canvas.height = size;
    }

    getCanvas() {
        return this._canvas;
    }

    getWidth() {
        return this._canvasWrapper.width;
    }

    getHeight() {
        return this._canvasWrapper.height;
    }

    clear() {
        this._canvas.clearRect(0, 0, this._canvasWrapper.width, this._canvasWrapper.height);
    }
}
