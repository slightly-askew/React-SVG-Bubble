
import {morphAxis, flipCoordinate, adjustCoordinate} from '../alterCoordinates'

test('morphs {x: 10, y: 20} into {x: 20, y:10}',
() => {
  expect(morphAxis({
    morph:true
  })(
    {x: 10, y: 20}
  )).toBe(
    {x: 20, y:10}
  )
});

test('flips x from 10 to 40 accross an axis with length 50',
() => {
  expect(flipCoordinate({
    flip: {
      x: true
    },
    dimensions: {
      x: 50,
      y: 60
    }
  }
  ,'x')(
    {x: 10, y: 20}
  )).toBe(
    {x: 40, y:20}
  )
});

test('adjusts x up 50 from 20',
() => {
  expect(adjustCoordinate({
    thresholds: {
      x: 10,
      y: 5
    },
    offsets: {
      x: 50,
      y: 60
    }
  }
  ,'x')(
    {x: 20, y: 20}
  )).toBe(
    {x: 70, y:20}
  )
});
