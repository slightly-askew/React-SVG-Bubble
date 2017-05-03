//@flow

import { compose } from 'recompose';
import rowDataShape from './helpers/createRowDataShape';

type Props = {
  listOfChildren: Array<string>,
  characterWidth: number,
  minTextWidth: number,
  paddingLrg: number,
  paddingSml: number,
  textSize: number,
  textMargin: number,
  columns: number
}

export default function ({
  listOfChildren,
  characterWidth,
  minTextWidth,
  paddingLrg,
  paddingSml,
  textSize,
  textMargin,
  columns = 1
}:Props): {
  offsetX: number,
  offsetY: number
} {

/*------------------------------------*\
  #GENERIC METHODS
\*------------------------------------*/

  const lineHeight:number = textSize + textMargin;

  const numberOfLines = (list: mixed[]):number => list.length;

  const getLengthOfItem = (item: string):number => item.length;

  const makeListOfLengths = (list: string[]): number[] => (
    list.map(getLengthOfItem));

  const extraLines = (lines:number):number => (lines - 1) * lineHeight;

  const findLargestItem = (list: number[]):number => Math.max(...list);

  // Column gaps

  const gapBetweenColumns = (paddingSml * 2) + characterWidth;
  const numberOfGaps = columns - 1;
  const addColumnGaps = numberOfGaps * gapBetweenColumns;

  const findWidth = (n: number): number => (
    n * characterWidth + (columns > 1) ? addColumnGaps : 0
  );

  /* End Generic Methods */

/*------------------------------------*\
  COLUMN LOGIC
\*------------------------------------*/

  // Width

  const checkItemAgainstMax = (i:number,max: number):number => Math.max(max,i);

  const measureLongestItemInColumns = (
    (acc:number[], row:string[]) => (
      row.map((col,i) => (
        acc[i] = checkItemAgainstMax(col.length, acc[i])
  ))))

  const columnSizes: number[] = new Array(columns);

  const getMaximumColumnCharCounts = (rowShape:string[][]):number[] => (
    rowShape.reduce(measureLongestItemInColumns, columnSizes)
  )

  // Height
   const linesAccountingForColumns = (n: number):number => Math.ceil(n / columns)

 /* end column logic */

/*------------------------------------*\
  #MEASURING DIMENSIONS
\*------------------------------------*/

  const measureExtraWidth = (min: number) => (textWidth: number):number => {
    return (
      (textWidth > min) ?
      textWidth - min :
      0
    )}

  const measureExtraHeight = (textLines:number):number => (
      (textLines > 0) ?
      paddingLrg + extraLines(textLines) :
      0
  );

  /* end measuring dimensions */

  /*------------------------------------*\
    #COMPOSITION
  \*------------------------------------*/

  const widthRequiredForColumns = compose(
      getMaximumColumnCharCounts,
      rowDataShape(columns)
  )

  const widthRequiredForSingleton = compose(
      findLargestItem,
      makeListOfLengths
  )

  const getNumberOfCharacters = (
    ( columns > 1 ) ?
    widthRequiredForColumns :
    widthRequiredForSingleton
  );

  const xOffset: <A>()=>A = compose(
    measureExtraWidth(minTextWidth),
    findWidth,
    getNumberOfCharacters
  )

  const yOffset: <A>()=>A = compose(
    measureExtraHeight,
    linesAccountingForColumns,
    numberOfLines
  )

  const measure = (
    func: () => number):number => (
      func(listOfChildren)
  )

/*------------------------------------*\
  #RETURN
\*------------------------------------*/

  return ({
    offsetX: measure(xOffset),
    offsetY: measure(yOffset),
  })}
