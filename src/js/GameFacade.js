import Grid from "./Grid";
import ControllerView from "./ControllerView";
import Update from "./Update";
import Canvas from "./Canvas";

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
        const grid = new Grid({name: 'back'});

        grid.setSizeX();
        grid.setSizeY();
        grid.draw();
        grid.fill();

        const game = new Canvas({name: 'game'});
        const update = new Update(grid, game);
        return new ControllerView(update);
    }
}
