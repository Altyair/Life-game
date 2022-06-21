import Canvas from "./Canvas";
import Data from "./Data";

/**
 * Creates an instance Grid.
 *
 * @constructor
 * @this {Grid}
 *
 */
export default class Grid extends Canvas {
    constructor(props) {
        super(props);

        this._data = Data.getInstance();
        this._size = { x : 0, y : 0 };

        this._initializeEvents();
        this._setConfiguration();
    }

    _initializeEvents () {
        this._data.on('changeNumberOfCells', () => {
            this._setConfiguration();
        });
    }

    _setConfiguration() {
        this.setSize();
        this.setSizeX();
        this.setSizeY();
        this.draw();
        this.fill();
    }

    setSizeX() {
        this._size.x = this._data.numberOfCells;
    }

    setSizeY() {
        this._size.y = this._data.numberOfCells;
    }

    getSizeX() {
        return this._size.x;
    }

    getSizeY() {
        return this._size.y;
    }

    fill() {
        const cells = this._data.getCells();
        const buffCells = this._data.getBuffCells();

        for (let i = 0; i < this._size.x; i += 1) {
            cells[i] = [];
            buffCells[i] = [];
            for (let j = 0; j <  this._size.y; j += 1) {
                cells[i][j] = false;
                buffCells[i][j] = false;
            }
        }
    };

    draw() {
        const canvas = this.getCanvas();
        canvas.translate(0.5, 0.5);
        canvas.beginPath();

        for (let i = 0; i <= this._size.x; i += 1) {
            canvas.moveTo(0, i * this._data.cellSize);
            canvas.lineWidth = 1;
            canvas.lineTo(this.getWidth(), i * this._data.cellSize);
            canvas.strokeStyle = "gray";

            canvas.lineWidth = 1;
            canvas.moveTo(i * this._data.cellSize, 0);
            canvas.lineTo(i * this._data.cellSize, this.getHeight());
            canvas.strokeStyle = "gray";
        }
        this.getCanvas().stroke();
    };
}
