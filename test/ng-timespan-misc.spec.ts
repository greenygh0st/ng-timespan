import { TimeSpan } from "../lib/ng-timespan"
import { expect } from 'chai';
import 'mocha';

describe('Timespan exists and is properly built with milliseconds for both dates', () => {

  const timespan = TimeSpan.Addition(new Date("2018-11-18T20:41:29.447Z").getTime(), new Date("2018-12-19T23:43:33.447Z").getTime())

  it('should return a result', () => {
    expect(timespan).to.not.be.null
  });

  it('should return the number of days this month', () => {
      const mon = TimeSpan.Month()
      expect(mon.days).to.be.oneOf([31,30,28])
  })

  it('should return the number of milliseconds in a day', () => {
      const day = TimeSpan.Day()
      console.log(day.totalMilliSeconds);
      expect(day.totalMilliSeconds).to.be.equal(86400000)
  })
})