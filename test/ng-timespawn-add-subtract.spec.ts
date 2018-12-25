import { TimeSpan } from "../lib/ng-timespan"
import { expect } from 'chai';
import 'mocha';

describe('Timespan exists and we can add and subtract from the date', () => {

  let timespan = TimeSpan.Addition(new Date("2018-12-18T20:41:29.447Z").getTime(), new Date("2018-12-19T23:43:33.447Z").getTime())

  it('should return a result', () => {
    expect(timespan).to.not.be.null
  })

  it('should return the nsdfgsd', () => {
    //   let date = timespan.addTo(new Date("2018-12-25T23:43:33.447Z"))
    //   console.log(date)
      
    //   expect(timespan.days).to.be.oneOf([31,30,28])
  })
})