import { TimeSpan } from "../lib/ng-timespan"
import { expect } from 'chai';
import 'mocha';

describe('Timespan exists and the totals are properly built', () => {

  const timespan = TimeSpan.Addition(new Date("2018-11-18T20:41:29.447Z").getTime(), new Date("2018-12-19T23:43:33.447Z").getTime())

  it('should return a result', () => {
    expect(timespan).to.not.be.null
  });

  it('total hours should be ', () => {
    expect(timespan.totalHours).to.be.equal(747)
  })

  it('total minutes should be ', () => {
    expect(timespan.totalMinutes).to.be.equal(44822)
  })

  it('total seconds should be ', () => {
    expect(timespan.totalSeconds).to.be.equal(2689324)
  })

  it('total milliseconds should be ', () => {
    expect(timespan.totalMilliSeconds).to.be.equal(2689324000)
  })
})