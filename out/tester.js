"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogEntry_1 = require("./LogEntry");
var level = '1';
var systemId = 'sys-01';
var instanceId = 'inst-01';
var actionId = 'a';
var timestamp = new Date();
var entry = new LogEntry_1.LogEntry(systemId, instanceId, actionId, timestamp);
entry.state = 'new state';
console.log('Entry: ', entry);
console.log('Get state: ', entry.state);
entry.systemId = systemId + '-new';
console.log('get sys id: ', entry.systemId);
entry.instanceId = instanceId + '-new';
console.log('get instance id: ', entry.instanceId);
entry.timestamp = new Date();
console.log('Get date: ', entry.timestamp);
entry.level = '1';
console.log('get level: ', entry.level);