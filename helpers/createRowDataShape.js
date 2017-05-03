//@flow

const rowIndex = (i:number, numberOfColumns: number):number => (
  i * numberOfColumns
);

const measuredSlice = (i:number, list:string[], columns: number):string[] => (
  list.slice(i, i + columns)
);

const newSlice = (i:number) => (list: string[], numberOfColumns: number) => (
  measuredSlice(i, list, numberOfColumns)
);

const sliceIntoRows = (numberOfColumns: number) => (
  acc, _, i:number, list:string[]
  ) => {
  const row = newSlice(rowIndex(i, numberOfColumns));
  return acc.concat([row(list, numberOfColumns)]);
}

export default function (numberOfColumns: number) {
  return ( list: string[]): string[][] => (
  list.reduce(sliceIntoRows(numberOfColumns), [])
)}
