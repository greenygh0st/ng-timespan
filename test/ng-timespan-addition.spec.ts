import { TimeSpan } from "../lib/ng-timespan"
import { expect } from 'chai';
import 'mocha';

describe('Timespan exists and is properly built with milliseconds for both dates', () => {

  const timespan = TimeSpan.Addition(new Date("2018-12-18T20:41:29.447Z").getTime(), new Date("2018-12-19T23:43:33.447Z").getTime())
  
  it('should return a result', () => {
    expect(timespan).to.not.be.null
  });

  it('should be different by one day', () => {
    expect(timespan.days).to.equal(1)
  })

  it('should be different by three hours', () => {
    expect(timespan.hours).to.equal(3)
  })

  it('should be different by two minutes', () => {
    expect(timespan.minutes).to.equal(2)
  })

  it('should be different by four seconds', () => {
    expect(timespan.seconds).to.equal(4)
  })

  it('should be different by zero milliseconds', () => {
    expect(timespan.milliseconds).to.equal(0)
  })

});

describe('Timespan exists and is properly built with dates for both dates', () => {

  const timespan = TimeSpan.Addition(new Date("2018-12-18T20:41:29.447Z"), new Date("2018-12-19T23:43:33.447Z"))
  
  it('should return a result', () => {
    expect(timespan).to.not.be.null
  });

  it('should be different by one day', () => {
    expect(timespan.days).to.equal(1)
  })

  it('should be different by three hours', () => {
    expect(timespan.hours).to.equal(3)
  })

  it('should be different by two minutes', () => {
    expect(timespan.minutes).to.equal(2)
  })

  it('should be different by four seconds', () => {
    expect(timespan.seconds).to.equal(4)
  })

  it('should be different by zero milliseconds', () => {
    expect(timespan.milliseconds).to.equal(0)
  })

});

describe('Timespan exists and is properly built with dates - left date a number and right is a date', () => {

  const timespan = TimeSpan.Addition(new Date("2018-12-18T20:41:29.447Z").getTime(), new Date("2018-12-19T23:43:33.447Z"))
  
  it('should return a result', () => {
    expect(timespan).to.not.be.null
  });

  it('should be different by one day', () => {
    expect(timespan.days).to.equal(1)
  })

  it('should be different by three hours', () => {
    expect(timespan.hours).to.equal(3)
  })

  it('should be different by two minutes', () => {
    expect(timespan.minutes).to.equal(2)
  })

  it('should be different by four seconds', () => {
    expect(timespan.seconds).to.equal(4)
  })

  it('should be different by zero milliseconds', () => {
    expect(timespan.milliseconds).to.equal(0)
  })

});

describe('Timespan exists and is properly built with dates for left date a date and for right number', () => {

  const timespan = TimeSpan.Addition(new Date("2018-12-18T20:41:29.447Z"), new Date("2018-12-19T23:43:33.447Z").getTime())
  
  it('should return a result', () => {
    expect(timespan).to.not.be.null
  });

  it('should be different by one day', () => {
    expect(timespan.days).to.equal(1)
  })

  it('should be different by three hours', () => {
    expect(timespan.hours).to.equal(3)
  })

  it('should be different by two minutes', () => {
    expect(timespan.minutes).to.equal(2)
  })

  it('should be different by four seconds', () => {
    expect(timespan.seconds).to.equal(4)
  })

  it('should be different by zero milliseconds', () => {
    expect(timespan.milliseconds).to.equal(0)
  })

});