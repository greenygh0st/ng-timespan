# ng-timespan
[![Build Status](https://travis-ci.org/greenygh0st/ng-timespan.svg?branch=master)](https://travis-ci.org/greenygh0st/ng-timespan) 

Because there were just not a lot of good Typescript options out there for timespans. Intended to be used with [Angular](https://angular.io/) but can potentially be used for just about any JS/TS project.

## Usage

### Install from [NPM](https://www.npmjs.com/package/ng-timespan)
`npm i ng-timespan --save`

### Import
`import { Timespan } from 'ng-timespan'`

### Use
```
// Create a date
let date1 = new Date()

// Create a second date
let date2 = date1.setHours(date1.getHours() + 2)

// Create the Timespan
let timespan = TimeSpan.Subtract(date1, date2)

// Do stuff! :)
console.log(`Time till expiration: ${timespan.days} days, ${timespan.hours} hours, ${timespan.hours} minutes, ${timespan.seconds}`)
console.log(`Total Days: ${timespan.totalDays}`)
console.log(`Total Hours: ${timespan.totalHours}`)
console.log(`Total Minutes: ${timespan.totalMinutes}`)
console.log(`Total Seconds: ${timespan.totalSeconds}`)
console.log(`Total Milliseconds: ${timespan.totalMilliSeconds}`)
```

### Contributing
1. 🍴& ⬇️ 
2. npm i
3. Make a meaningful change
4. npm run build to make sure everythng is working right
5. Commit to your 🍴
6. Open a PR explaining why the change is required.
