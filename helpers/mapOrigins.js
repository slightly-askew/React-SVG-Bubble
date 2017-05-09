//@flow

type coordinates = {
  'x': number,
  'y': number
}

export default ( boxOrigin: {
  'x': number,
  'y': number
}) => (
  textGrid: {
    'x': Array<number>,
    'y': Array<number>
  }
): Array<coordinates> => (

  textGrid.y.reduce((acc, y) => (
    acc.concat(textGrid.x.map((x) => ({
      x: x + boxOrigin.x,
      y: y + boxOrigin.y
    })
  ))),[])
)
