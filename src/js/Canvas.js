/**
 * Creates an instance Canvas.
 *
 * @constructor
 * @this {Canvas}
 *
 */
export default class Canvas {
    constructor(options) {
        if (options === undefined || options.name === undefined) {
            throw new Error('Canvas tag name not passed');
        }

        this._canvasWrapper = document.getElementById(options.name);
        this._canvas = this._canvasWrapper.getContext('2d');
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
}
