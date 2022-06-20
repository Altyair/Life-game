'use strict';

import GameFacade from './GameFacade';

/**
 * Creates an instance Application.
 *
 * @constructor
 * @this {Application}
 *
 */
class Application {

    main() {
        this._createGame();
    }

    _createGame() {
        const calculator = new GameFacade();
        calculator.create();
    }
}

window.onload = function () {
    const application = new Application();
    application.main();
}
