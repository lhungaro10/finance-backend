/** biome-ignore-all lint/suspicious/noExplicitAny: to be able to log every tyoe of variable */
import { Chalk, type ChalkInstance } from "chalk";
export class Logger {
	private static instance: Logger;
	private logLevel = new Map();
	private readonly colorMap: Record<string, ChalkInstance> = {
		info: new Chalk().blue,
		error: new Chalk().red,
		warn: new Chalk().yellow,
		debug: new Chalk().green,
	};
	private constructor() {
		this.logLevel.set(0, "info");
		this.logLevel.set(1, "error");
		this.logLevel.set(2, "warn");
		this.logLevel.set(3, "debug");
	}

	public static getInstance() {
		if (!Logger.instance) {
			Logger.instance = new Logger();
		}

		return Logger.instance;
	}

	private getMessage(level: string, msg: string) {
		const timestamp = new Date().toISOString();
		//- ${msg}
		const message = `[${timestamp}][${level}] - ${msg}`;
		return this.colorMap[level](message);
	}

	private log(level: string, msg: string, ...args: any[]) {
		const message = this.getMessage(level, msg);
		switch (level) {
			case this.logLevel.get(0):
				console.info(message, ...args);
				break;
			case this.logLevel.get(1):
				console.error(message, ...args);
				break;
			case this.logLevel.get(2):
				console.warn(message, ...args);
				break;
			case this.logLevel.get(3):
				console.debug(message, ...args);
				break;
		}
	}

	public info(msg: string, ...args: any[]) {
		this.log("info", msg, ...args);
	}

	public error(msg: string, ...args: any[]) {
		this.log("error", msg, ...args);
	}

	public warn(msg: string, ...args: any[]) {
		this.log("warn", msg, ...args);
	}

	public debug(msg: string, ...args: any[]) {
		this.log("debug", msg, ...args);
	}
}
