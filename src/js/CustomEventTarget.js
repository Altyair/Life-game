/**
 * Creates an instance CustomEventTarget.
 *
 * @constructor
 * @this {CustomEventTarget}
 *
 */
function CustomEventTarget() {
    this._events = {};
}

CustomEventTarget.prototype = {

    constructor: CustomEventTarget,

    on: function (eventType, listener) {
        let events = this._events,
            listeners;
        if (eventType in events) {
            listeners = events[eventType];
            if (listeners.indexOf(listener) === -1) {
                listeners.push(listener);
            }
        } else {
            events[eventType] = [listener];
        }
    },

    off: function (eventType, listener) {
        let events = this._events,
            listeners;
        if (eventType in events) {
            listeners = events[eventType];
            let pos = listeners.indexOf(listener);
            if(pos !== -1) {
                listeners.splice(pos, 1);
            }
        }
    },

    _fire: function(eventType, detail) {
        let listeners = this._events[eventType];
        if (listeners) {
            let event = {
                type: eventType,
                detail: detail
            };
            listeners.forEach(function (listener) {
                listener.call(this, event);
            }, this);
        }
    }
};

export default CustomEventTarget;
