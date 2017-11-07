import { LogEntry } from './LogEntry';

let level = '1';
let systemId = 'sys-01';
let instanceId = 'inst-01';
let actionId = 'a';
let timestamp = new Date();

let entry = new LogEntry(systemId, instanceId, actionId, timestamp);

entry.state = 'new state';

console.log('Entry: ', entry);
console.log('Get state: ', entry.state);


entry.systemId = systemId + '-new';
console.log('get sys id: ', entry.systemId);

entry.instanceId = instanceId + '-new';
console.log('get instance id: ', entry.instanceId);

// entry.actiondId = actionId + '-new';
// console.log('Get action id: ', entry.actiondId);

entry.timestamp = new Date();
console.log('Get date: ', entry.timestamp);

entry.level = '1';
console.log('get level: ', entry.level);