/**
 * Creates an instance ControllerView.
 *
 * @constructor
 * @this {ControllerView}
 *
 */
export default class ControllerView {
    constructor(update) {
        this._update = update;
        this._findElements();
        this._initializeEvents();
    }

    _findElements() {
        this._clearBtn = document.getElementById('clear');
        this._randBtn = document.getElementById('rand');
        this._stepBtn = document.getElementById('step');
        this._autoplayBtn = document.getElementById('autoplay');
        this._stopBtn = document.getElementById('stop');
    }

    _initializeEvents() {
        this._clearBtn.addEventListener('click', () => {
            this._update.clear();
        });

        this._randBtn.addEventListener('click', () => {
            this._update.randomFill();
        });

        this._stepBtn.addEventListener('click', () => {
            this._update.fill();
        });

        this._autoplayBtn.addEventListener('click', () => {
            this._update.autoplay();
        });

        this._stopBtn.addEventListener('click', () => {
            this._update.stop();
        });
    }
}
