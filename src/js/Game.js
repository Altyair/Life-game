import Canvas from "./Canvas";
import Data from "./Data";

/**
 * Creates an instance Game.
 *
 * @constructor
 * @this {Game}
 *
 */
export default class Game extends Canvas {
    constructor(props) {
        super(props);

        this._data = Data.getInstance();
        this.setSize();
        this._initializeEvents();
    }

    _initializeEvents () {
        this._data.on('changeNumberOfCells', () => {
            this.setSize();
        });
    }
}
