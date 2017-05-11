//@flow

import { compose } from 'recompose';

const getColSize = (list: Array<any>, numColumns: number): {

  list: Array<any>,
  colSize: number

} => ({
  list: list,
  colSize: Math.ceil(list.length / numColumns),
  rowSize: numColumns,
});

const splitListIntoRows = ({ list, rowSize, colSize }: {

  list: Array<any>,
  rowSize: number,
  colSize: number
}): {
  shape: Array<Array<any>>,
  colSize: number

} => {

  let rowList = [];

  for (let i = 0; i < colSize; i++) {

    const rowStart = i * rowSize;
    const rowFin = i * rowSize + rowSize;

    rowList.push(list.slice(rowStart,rowFin))
  }

  return ({
    shape: rowList,
    colSize: colSize
    });
}

const createRowDataShape = compose(
  splitListIntoRows,
  getColSize
)

export default (list: Array<any>, numColumns: number): {
  shape: Array<Array<any>>,
  colSize: number
  } => (

  createRowDataShape(list, numColumns)
)
