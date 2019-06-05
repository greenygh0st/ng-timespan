const MILLISECONDS_IN_A_SECOND: number = 1000;
const SECONDS_IN_A_MINUTE: number = 60;
const MINUTES_IN_AN_HOUR: number = 60;
const HOURS_IN_A_DAY: number = 24;
const DAYS_IN_A_WEEK: number = 7;

const MILLISECONDS_IN_A_MINUTE = MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE;
const MILLISECONDS_IN_AN_HOUR = MILLISECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR;
const MILLISECONDS_IN_A_DAY = MILLISECONDS_IN_AN_HOUR * HOURS_IN_A_DAY;
const MILLISECONDS_IN_A_WEEK = MILLISECONDS_IN_A_DAY * DAYS_IN_A_WEEK;


export class TimeSpan {
	/**
	 * Add the second date to the first date to create a time span
	 * @param date1 The first date
	 * @param date2 The second date
	 */
	static Addition(date1: Number|Date, date2: Number|Date) {
		if ((typeof date1 === "number") && (typeof date2 === "number")) {
			let milliSeconds: number = (date2 as number) - (date1 as number);
			return new TimeSpan(milliSeconds);
		} else if (date1 instanceof Date && date2 instanceof Date) {
			let milliSeconds: number = date2.getTime() - date1.getTime();
			return new TimeSpan(milliSeconds);
		} else if (date1 instanceof Date && (typeof date2 === "number")) {
			let milliSeconds: number = (date2 as number) - date1.getTime();
			return new TimeSpan(milliSeconds);
		} else if ((typeof date1 === "number") && date2 instanceof Date) {
			let milliSeconds: number = date2.getTime() - (date1 as number);
			return new TimeSpan(milliSeconds);
		}
	}

	/**
	 * Subtract the first date from second date to create a time span
	 * @param date1 The first date
	 * @param date2 The second date
	 */
	static Subtract(date1: Number|Date, date2: Number|Date) {
		if ((typeof date1 === "number") && (typeof date2 === "number")) {
			let milliSeconds: number = (date2 as number) - (date1 as number);
			return new TimeSpan(milliSeconds);
		} else if (date1 instanceof Date && date2 instanceof Date) {
			let milliSeconds: number = date2.getTime() - date1.getTime();
			return new TimeSpan(milliSeconds);
		} else if (date1 instanceof Date && (typeof date2 === "number")) {
			let milliSeconds: number = (date2 as number) - date1.getTime();
			return new TimeSpan(milliSeconds);
		} else if ((typeof date1 === "number") && date2 instanceof Date) {
			let milliSeconds: number = date2.getTime() - (date1 as number);
			return new TimeSpan(milliSeconds);
		}
	}

	static Day(): TimeSpan {
		return new TimeSpan(MILLISECONDS_IN_A_DAY);
	}
	static Hour(): TimeSpan { return new TimeSpan(MILLISECONDS_IN_AN_HOUR); }
	static Week(): TimeSpan { return new TimeSpan(MILLISECONDS_IN_A_WEEK) };
	static Month(): TimeSpan {
		let now: any = new Date();
		let aMonthAgo: any = new Date();
		aMonthAgo.setMonth(aMonthAgo.getMonth() - 1);
		return new TimeSpan(now - aMonthAgo);
	}

	constructor(milliSeconds: number = 0) {
		this._seconds = 0;
		this._minutes = 0;
		this._hours = 0;
		this._days = 0;
		this.milliseconds = milliSeconds;
	}

	/**
	 * Add a date to the current timespan
	 * @param date Add this date
	 */
	// addTo(date: Date): Date {
	// 	console.log('add ' + this.totalMilliSeconds, this);
	// 	date.setMilliseconds(date.getMilliseconds() + this.totalMilliSeconds);
	// 	return date;
	// }

	/**
	 * Subtract a date to the current timespan
	 * @param date Subtract this date
	 */
	// subtractFrom(date: Date): Date {
	// 	date.setMilliseconds(date.getMilliseconds() - this.totalMilliSeconds);
	// 	return date;
	// }

	private _milliseconds; number;
	private _totalMilliSeconds: number;
	private _seconds: number;
	private _minutes: number;
	private _hours: number;
	private _days: number;

	/**
	 * Get the number of days between the first and second date
	 */
	get days(): number {
		return this._days;
	}
	set days(value: number) {
		if (isNaN(value)) {
			value = 0;
		}
		this._days = value;
		this.calculateMilliSeconds();
	}

	/**
	 * Get the number of hours between the first and second date
	 */
	get hours(): number {
		return this._hours;
	}
	set hours(value: number) {
		if (isNaN(value)) {
			value = 0;
		}
		this._hours = value;
		this.calculateMilliSeconds();
	}

	/**
	 * Get the number of minutes between the first and second date
	 */
	get minutes(): number {
		return this._minutes;
	}
	set minutes(value: number) {
		if (isNaN(value)) {
			value = 0;
		}
		this._minutes = value;
		this.calculateMilliSeconds();
	}

	/**
	 * Get the number of seconds between the first and second date
	 */
	get seconds(): number {
		return this._seconds;
	}
	set seconds(value: number) {
		this._seconds = value;
		this.calculateMilliSeconds();
	}

	/**
	 * Get the number of milliseconds between the first and second date
	 */
	get milliseconds(): number {
		return this._milliseconds;
	}
	set milliseconds(value: number) {
		if (isNaN(value)) {
			value = 0;
		}
		this._milliseconds = value;
		this.calculateMilliSeconds();
	}

	/**
	 * Get the total number of days between the first and second date
	 */
	get totalMilliSeconds(): number {
		return this._totalMilliSeconds;
	}

	/**
	 * Get the total number of seconds between the first and second date
	 */
	get totalSeconds(): number {
		return Math.floor(this._totalMilliSeconds / MILLISECONDS_IN_A_SECOND);
	}

	/**
	 * Get the total number of minutes between the first and second date
	 */
	get totalMinutes(): number {
		return Math.floor(this._totalMilliSeconds / MILLISECONDS_IN_A_MINUTE);
	}

	/**
	 * Get the total number of hours between the first and second date
	 */
	get totalHours(): number {
		return Math.floor(this._totalMilliSeconds / MILLISECONDS_IN_AN_HOUR);
	}

	roundValue(origValue: number, maxValue: number) {
		return { modulu: origValue % maxValue, addition: Math.floor(origValue / maxValue) };
	}

	calculateMilliSeconds() {

		let newMilliSecond = this.roundValue(this._milliseconds, MILLISECONDS_IN_A_SECOND);
		this._milliseconds = newMilliSecond.modulu;
		this._seconds += newMilliSecond.addition;

		let newSecond = this.roundValue(this._seconds, SECONDS_IN_A_MINUTE);
		this._seconds = newSecond.modulu;
		this._minutes += newSecond.addition;

		let newminutes = this.roundValue(this._minutes, MINUTES_IN_AN_HOUR);
		this._minutes = newminutes.modulu;
		this._hours += newminutes.addition;

		let newDays = this.roundValue(this._hours, HOURS_IN_A_DAY);
		this._hours = newDays.modulu;
		this._days += newDays.addition;

		this._totalMilliSeconds = this.days * MILLISECONDS_IN_A_DAY + this.hours * MILLISECONDS_IN_AN_HOUR + this.minutes * MILLISECONDS_IN_A_MINUTE
			+ this.seconds * MILLISECONDS_IN_A_SECOND + this.milliseconds;
	}
}