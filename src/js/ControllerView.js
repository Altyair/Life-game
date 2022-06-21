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
        this._resetBtn = document.getElementById('clear');
        this._randBtn = document.getElementById('rand');
        this._stepBtn = document.getElementById('step');
        this._autoplayBtn = document.getElementById('autoplay');
        this._pauseBtn = document.getElementById('pause');
        this._numberOfCellsSelect = document.getElementById('number_of_cells');
    }

    _initializeEvents() {
        this._update.on('play', this._playView.bind(this));
        this._update.on('pause', this._stopView.bind(this));
        this._update.on('reset', this._resetView.bind(this));

        this._numberOfCellsSelect.addEventListener('change', this._onChangeNumberOfCells.bind(this));
        this._resetBtn.addEventListener('click', this._onReset.bind(this));
        this._randBtn.addEventListener('click', this._onRandomFill.bind(this));
        this._stepBtn.addEventListener('click', this._onFill.bind(this));
        this._autoplayBtn.addEventListener('click', this._onPlay.bind(this));
        this._pauseBtn.addEventListener('click', this._onPause.bind(this));
    }

    _playView() {
        this._numberOfCellsSelect.disabled = true;
    }

    _stopView() {
        this._numberOfCellsSelect.disabled = false;
    }

    _resetView() {
        this._numberOfCellsSelect.disabled = false;
    }

    _onChangeNumberOfCells (event) {
        this._update.updateNumberOfCells(parseInt(event.target.value, 10));
    }

    _onReset (event) {
        this._update.reset();
    }

    _onRandomFill (event) {
        this._update.randomFill();
    }

    _onFill (event) {
        this._update.fill();
    }

    _onPlay (event) {
        this._update.autoplay();
    }

    _onPause (event) {
        this._update.pause();
    }
}
