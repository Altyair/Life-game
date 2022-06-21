import Grid from "./Grid";
import ControllerView from "./ControllerView";
import Update from "./Update";
import Canvas from "./Canvas";
import Data from "./Data";

/**
 * Creates an instance GameFacade.
 *
 * @constructor
 * @this {GameFacade}
 *
 */
export default class GameFacade {
    constructor() {}

    create() {
        const data = Data.getInstance();
        const grid = new Grid({name: 'back'});
        grid.setSize();
        grid.setSizeX();
        grid.setSizeY();
        grid.draw();
        grid.fill();

        const game = new Canvas({name: 'game'});
        game.setSize();

        data.on('changeNumberOfCells', () => {
            grid.setSize();
            grid.setSizeX();
            grid.setSizeY();
            grid.draw();
            grid.fill();

            game.setSize();
        });

        const update = new Update(grid, game);
        return new ControllerView(update);
    }
}
