import { TimeSpan } from "../lib/ng-timespan"
import { expect } from 'chai';
import 'mocha';

describe('Timespan exists and is properly built with milliseconds for both dates', () => {

  const timespan = TimeSpan.Addition(new Date("2018-11-18T20:41:29.447Z").getTime(), new Date("2018-12-19T23:43:33.447Z").getTime())

  it('can set days value as NaN', () => {
    const days = "Not a number"
    timespan.days = parseInt(days)
    expect(timespan.days).to.be.equal(0)
  })

  it('can set days value', () => {
    const days = 12
    timespan.days = days
    expect(timespan.days).to.be.equal(12)
  })

  it('can set hours value as NaN', () => {
    const hours = "Not a number"
    timespan.hours = parseInt(hours)
    expect(timespan.hours).to.be.equal(0)
  })

  it('can set hours value', () => {
    const hours = 4
    timespan.hours = hours
    expect(timespan.hours).to.be.equal(4)
  })

  it('can set minutes value as NaN', () => {
    const minutes = "Not a number"
    timespan.minutes = parseInt(minutes)
    expect(timespan.minutes).to.be.equal(0)
  })

  it('can set minutes value', () => {
    const minutes = 4
    timespan.minutes = minutes
    expect(timespan.minutes).to.be.equal(4)
  })

  it('can set seconds value', () => {
    const seconds = 12
    timespan.seconds = seconds
    expect(timespan.seconds).to.be.equal(12)
  })

  it('can set milliseconds value as NaN', () => {
    const milliseconds = "Not a number"
    timespan.milliseconds = parseInt(milliseconds)
    expect(timespan.milliseconds).to.be.equal(0)
  })
})