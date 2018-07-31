export declare class TimeSpan {
    static Subtract(date1: any, date2: any): TimeSpan;
    static Day(): TimeSpan;
    static Hour(): TimeSpan;
    static Week(): TimeSpan;
    static Month(): TimeSpan;
    constructor(milliSeconds?: number);
    addTo(date: Date): Date;
    subtructFrom(date: Date): Date;
    private _milliseconds;
    number: any;
    private _totalMilliSeconds;
    private _seconds;
    private _minutes;
    private _hours;
    private _days;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    readonly totalMilliSeconds: number;
    readonly totalSeconds: number;
    readonly totalMinutes: number;
    readonly totalHours: number;
    roundValue(origValue: any, maxValue: any): {
        modulu: number;
        addition: number;
    };
    calcMilliSeconds(): void;
}
