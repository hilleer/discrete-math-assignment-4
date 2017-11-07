import { InterfaceLogEntry } from './Interfaces';

export class LogEntry implements InterfaceLogEntry {
	public entrySystemId: string;
	public entryInstanceId: string;
	public entryActionId: string;
	public entryTimestamp: Date;

	private entryLevel: string;
	private entryState: string;

	constructor(public _systemId: string, public _instanceId: string, public _actionId: string, public _timestamp: Date) {
		this.entrySystemId = _systemId;
		this.entryInstanceId = _instanceId;
		this.entryActionId = _actionId;
		this.entryTimestamp = _timestamp;
	}

	get state(): string {
		return this.entryState;
	}

	set state(state: string) {
		this.entryState = state;
	}

	get systemId(): string {
		return this.entrySystemId
	}

	set systemId(systemId: string) {
		this.entrySystemId = systemId;
	}

	get instanceId(): string {
		return this.entryInstanceId;
	}

	set instanceId(instanceId: string) {
		this.entryInstanceId = instanceId;
	}

	get actiondId(): string {
		return this.entryActionId;
	}

	set actiondId(actiondId: string) {
		this.entryActionId = actiondId;
	}

	get timestamp(): Date {
		return this.entryTimestamp;
	}

	set timestamp(timestamp: Date) {
		this.entryTimestamp = timestamp;
	}

	get level(): string {
		return this.entryLevel;
	}

	set level(level: string) {
		this.entryLevel = level;
	}

}