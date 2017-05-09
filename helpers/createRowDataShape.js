//@flow

import { compose } from 'recompose';

const getColumnSize = (list: Array<mixed>, numColumns: number): {

  list: Array<mixed>,
  colSize: number

} => ({
  list: list,
  colSize: Math.ceil(list.length / numColumns)
});

const getRowSize = ({ list, colSize }:{

  list: Array<mixed>,
  colSize: number
}): {
  list: Array<mixed>,
  rowSize: number

} => ({
  list: list,
  rowSize: Math.ceil(list.length / colSize)
});

const splitListIntoRows = ({ list, rowSize }: {

  list: Array<mixed>,
  rowSize: number
}): {
  shape: Array<mixed>,
  rowSize: number

} => {

  let rowList = [];

  for (let i = 0; i < rowSize; i++) {

    const rowStart = i * rowSize;
    const rowFin = i * rowSize + rowSize;

    rowList.push(list.slice(rowStart,rowFin))
  }

  return ({
    shape: rowList,
    rowSize: rowSize
    });
}

const createRowDataShape = compose(

  splitListIntoRows,
  getRowSize,
  getColumnSize
)

export default (list: Array<any>, numColumns: number): {
  shape: Array<mixed>,
  rowSize: number
  } => (

  createRowDataShape(list, numColumns)
)
