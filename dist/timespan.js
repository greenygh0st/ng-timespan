var MILLISECONDS_IN_A_SECOND = 1000;
var SECONDS_IN_A_MINUTE = 60;
var MINUTES_IN_AN_HOUR = 60;
var HOURS_IN_A_DAY = 24;
var DAYS_IN_A_WEEK = 7;
var MILLISECONDS_IN_A_MINUTE = MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE;
var MILLISECONDS_IN_AN_HOUR = MILLISECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR;
var MILLISECONDS_IN_A_DAY = MILLISECONDS_IN_AN_HOUR * HOURS_IN_A_DAY;
var MILLISECONDS_IN_A_WEEK = MILLISECONDS_IN_A_DAY * DAYS_IN_A_WEEK;
var TimeSpan = /** @class */ (function () {
    function TimeSpan(milliSeconds) {
        if (milliSeconds === void 0) { milliSeconds = 0; }
        this._seconds = 0;
        this._minutes = 0;
        this._hours = 0;
        this._days = 0;
        this.milliseconds = milliSeconds;
    }
    TimeSpan.Subtract = function (date1, date2) {
        var milliSeconds = date1 - date2;
        return new TimeSpan(milliSeconds);
    };
    TimeSpan.Day = function () {
        return new TimeSpan(MILLISECONDS_IN_A_DAY);
    };
    TimeSpan.Hour = function () { return new TimeSpan(MILLISECONDS_IN_AN_HOUR); };
    TimeSpan.Week = function () { return new TimeSpan(MILLISECONDS_IN_A_WEEK); };
    ;
    TimeSpan.Month = function () {
        var now = new Date();
        var aMonthAgo = new Date();
        aMonthAgo.setMonth(aMonthAgo.getMonth() - 1);
        return new TimeSpan(now - aMonthAgo);
    };
    TimeSpan.prototype.addTo = function (date) {
        console.log('add ' + this.totalMilliSeconds, this);
        date.setMilliseconds(date.getMilliseconds() + this.totalMilliSeconds);
        return date;
    };
    TimeSpan.prototype.subtructFrom = function (date) {
        date.setMilliseconds(date.getMilliseconds() - this.totalMilliSeconds);
        return date;
    };
    Object.defineProperty(TimeSpan.prototype, "days", {
        get: function () {
            return this._days;
        },
        set: function (value) {
            if (isNaN(value)) {
                value = 0;
            }
            this._days = value;
            this.calcMilliSeconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "hours", {
        get: function () {
            return this._hours;
        },
        set: function (value) {
            if (isNaN(value)) {
                value = 0;
            }
            this._hours = value;
            this.calcMilliSeconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "minutes", {
        get: function () {
            return this._minutes;
        },
        set: function (value) {
            if (isNaN(value)) {
                value = 0;
            }
            this._minutes = value;
            this.calcMilliSeconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "seconds", {
        get: function () {
            return this._seconds;
        },
        set: function (value) {
            this._seconds = value;
            this.calcMilliSeconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "milliseconds", {
        get: function () {
            return this._milliseconds;
        },
        set: function (value) {
            if (isNaN(value)) {
                value = 0;
            }
            this._milliseconds = value;
            this.calcMilliSeconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "totalMilliSeconds", {
        get: function () {
            return this._totalMilliSeconds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "totalSeconds", {
        get: function () {
            return Math.floor(this._totalMilliSeconds / MILLISECONDS_IN_A_SECOND);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "totalMinutes", {
        get: function () {
            return Math.floor(this._totalMilliSeconds / MILLISECONDS_IN_A_MINUTE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "totalHours", {
        get: function () {
            return Math.floor(this._totalMilliSeconds / MILLISECONDS_IN_AN_HOUR);
        },
        enumerable: true,
        configurable: true
    });
    TimeSpan.prototype.roundValue = function (origValue, maxValue) {
        return { modulu: origValue % maxValue, addition: Math.floor(origValue / maxValue) };
    };
    TimeSpan.prototype.calcMilliSeconds = function () {
        var newMilliSecond = this.roundValue(this._milliseconds, MILLISECONDS_IN_A_SECOND);
        this._milliseconds = newMilliSecond.modulu;
        this._seconds += newMilliSecond.addition;
        var newSecond = this.roundValue(this._seconds, SECONDS_IN_A_MINUTE);
        this._seconds = newSecond.modulu;
        this._minutes += newSecond.addition;
        var newminutes = this.roundValue(this._minutes, MINUTES_IN_AN_HOUR);
        this._minutes = newminutes.modulu;
        this._hours += newminutes.addition;
        var newDays = this.roundValue(this._hours, HOURS_IN_A_DAY);
        this._hours = newDays.modulu;
        this._days += newDays.addition;
        this._totalMilliSeconds = this.days * MILLISECONDS_IN_A_DAY + this.hours * MILLISECONDS_IN_AN_HOUR + this.minutes * MILLISECONDS_IN_A_MINUTE
            + this.seconds * MILLISECONDS_IN_A_SECOND + this.milliseconds;
    };
    return TimeSpan;
}());
export { TimeSpan };
//# sourceMappingURL=timespan.js.map