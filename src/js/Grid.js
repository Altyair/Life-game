import CONFIG from '../config.json';
import Canvas from "./Canvas";
import Data from "./Data";

const CELL_SIZE = CONFIG.CELL_SIZE;

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
    }

    setSizeX() {
        this._size.x = parseInt(this.getWidth() / CELL_SIZE, 10);
    }

    setSizeY() {
        this._size.y = parseInt(this.getHeight() / CELL_SIZE, 10);
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

        for (let i = 0; i < this.getSizeX(); i += 1) {
            cells[i] = [];
            buffCells[i] = [];
            for (let j = 0; j < this.getSizeY(); j += 1) {
                cells[i][j] = false;
                buffCells[i][j] = false;
            }
        }
    };

    draw() {
        const canvas = this.getCanvas();

        canvas.translate(0.5, 0.5);
        canvas.beginPath();
        for (let i = 0; i <= this.getSizeX(); i += 1) {
            canvas.moveTo(0, i * CELL_SIZE);
            canvas.lineWidth = 1;
            canvas.lineTo(this.getWidth(), i * CELL_SIZE);
            canvas.strokeStyle = "#ddd";

            canvas.lineWidth = 1;
            canvas.moveTo(i * CELL_SIZE, 0);
            canvas.lineTo(i * CELL_SIZE, this.getHeight());
            canvas.strokeStyle = "#ddd";
        }

        this.getCanvas().stroke();
    };
}
