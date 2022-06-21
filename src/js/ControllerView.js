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
        this._initConfigurationViewElements();
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
        this._update.on('change_number_of_cells', this._changeNumberOfCells.bind(this));
        this._update.on('randomFill', this._randomFill.bind(this));
        this._update.on('play', this._playView.bind(this));
        this._update.on('pause', this._pauseView.bind(this));
        this._update.on('reset', this._resetView.bind(this));
        this._update.on('identical', this._identicalView.bind(this));

        this._numberOfCellsSelect.addEventListener('change', this._onChangeNumberOfCells.bind(this));
        this._resetBtn.addEventListener('click', this._onReset.bind(this));
        this._randBtn.addEventListener('click', this._onRandomFill.bind(this));
        this._stepBtn.addEventListener('click', this._onFill.bind(this));
        this._autoplayBtn.addEventListener('click', this._onPlay.bind(this));
        this._pauseBtn.addEventListener('click', this._onPause.bind(this));
    }

    _initConfigurationViewElements() {
        this._autoplayBtn.disabled = true;
        this._pauseBtn.disabled = true;
        this._resetBtn.disabled = true;
        this._stepBtn.disabled = true;
    }

    _changeNumberOfCells() {
        this._initConfigurationViewElements();
    }

    _identicalView() {
        this._autoplayBtn.disabled = true;
        this._pauseBtn.disabled = true;
        this._stepBtn.disabled = true;
        this._autoplayBtn.style.opacity = '1';
    }

    _randomFill() {
        this._autoplayBtn.disabled = false;
        this._resetBtn.disabled = false;
        this._stepBtn.disabled = false;
    }

    _playView() {
        this._autoplayBtn.style.opacity = '0.5';
        this._pauseBtn.style.opacity = '1';
        this._numberOfCellsSelect.disabled = true;
        this._pauseBtn.disabled = false;
        this._randBtn.disabled = true;
        this._stepBtn.disabled = true;

    }

    _pauseView() {
        this._pauseBtn.style.opacity = '0.5';
        this._autoplayBtn.style.opacity = '1';
        this._stepBtn.disabled = false;
    }

    _resetView() {
        this._numberOfCellsSelect.disabled = false;
        this._autoplayBtn.style.opacity = '1';
        this._pauseBtn.style.opacity = '1';
        this._randBtn.disabled = false;

        this._initConfigurationViewElements();
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
