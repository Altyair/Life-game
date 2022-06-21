import Grid from "./Grid";
import Game from "./Game";
import ControllerView from "./ControllerView";
import Update from "./Update";

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
        grid.setSize();
        grid.setSizeX();
        grid.setSizeY();
        grid.draw();
        grid.fill();

        const game = new Game({name: 'game'});
        game.setSize();

        const update = new Update(grid, game);
        update.canPlay = true;
        return new ControllerView(update);
    }
}
