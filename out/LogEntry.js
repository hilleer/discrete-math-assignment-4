"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogEntry = (function () {
    function LogEntry(_systemId, _instanceId, _actionId, _timestamp) {
        this._systemId = _systemId;
        this._instanceId = _instanceId;
        this._actionId = _actionId;
        this._timestamp = _timestamp;
        this.entrySystemId = _systemId;
        this.entryInstanceId = _instanceId;
        this.entryActionId = _actionId;
        this.entryTimestamp = _timestamp;
    }
    Object.defineProperty(LogEntry.prototype, "state", {
        get: function () {
            return this.entryState;
        },
        set: function (state) {
            this.entryState = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEntry.prototype, "systemId", {
        get: function () {
            return this.entrySystemId;
        },
        set: function (systemId) {
            this.entrySystemId = systemId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEntry.prototype, "instanceId", {
        get: function () {
            return this.entryInstanceId;
        },
        set: function (instanceId) {
            this.entryInstanceId = instanceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEntry.prototype, "actiondId", {
        get: function () {
            return this.entryActionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEntry.prototype, "actionId", {
        set: function (actiondId) {
            this.entryActionId = actiondId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEntry.prototype, "timestamp", {
        get: function () {
            return this.entryTimestamp;
        },
        set: function (timestamp) {
            this.entryTimestamp = timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEntry.prototype, "level", {
        get: function () {
            return this.entryLevel;
        },
        set: function (level) {
            this.entryLevel = level;
        },
        enumerable: true,
        configurable: true
    });
    return LogEntry;
}());
exports.LogEntry = LogEntry;
