//@flow

import createRowDataShape from '../helpers/createRowDataShape';

type Props = {
  children: Array<{
    label: string,
    target: string
  }>,
  characterWidth: number,
  minTextWidth: number,
  textPadding: {
    ['top' | 'right' | 'bottom' | 'left'] : number
  },
  textSize: number,
  textMargin: number,
  dividerWidth: number,
  columns: number,
  rowSize: number,
  textboxOrigin: {
    x: number,
    y: number
  }
}

export default (props: Props) => {


    const extraColumns = props.columns - 1;

    // Width
    const checkItemAgainstMax = (i:number,max: number):number => Math.max(max,i);

    const measureLongestItemInColumns = (
      (acc:number[], row:number[]) => (
        row.map((col,i) => (
          acc[i] = checkItemAgainstMax(col, acc[i])
    ))))

    const columnSizes: number[] = new Array(props.columns);

    const getMaximumColumnCharCounts = (rowShape:Array<Array<number>>): number[] => (
      rowShape.reduce(measureLongestItemInColumns, columnSizes)
    )

    const childrenAsChars: Array<number> = props.children.map(c => c.label.length);

    const childrenAsWidths: Array<number> = childrenAsChars.map(c => c * props.characterWidth)

    const childrenAsShape = createRowDataShape(childrenAsWidths, props.columns)

    const colWidths = getMaximumColumnCharCounts(childrenAsShape.shape)

    const textOriginsX: Array<number> = colWidths
    .reduce((acc, c, i) => (
      acc.concat((acc[i-1]) + c +
      (props.textMargin * 2) +
      props.dividerWidth
    )),[0])
    .slice(0, extraColumns);

    const getLastValue = (a: Array<number>): number => a.slice().pop();

    const textFullWidth: number = getLastValue(textOriginsX) + getLastValue(colWidths);

    const columnDividerOrigins =
    textOriginsX.slice(1)
    .map(o => o - props.textMargin + props.dividerWidth)

    // Height
    const lines = props.children.length;
    const linesAccountingForColumns = Math.ceil(lines / props.columns);

    const lineHeight = props.textSize + props.textMargin

    const textOriginsY =
    new Array(linesAccountingForColumns)
    .map((_, i) => i * lineHeight)

    const textFullHeight = linesAccountingForColumns * lineHeight


   /* end column logic */

  return Object.assign({},
    {...props},
    {textDimensions: {
      x: textFullWidth,
      y: textFullHeight
    }},
    {textGrid : {
      x: textOriginsX,
      y: textOriginsY
    }},
    {textWidths: childrenAsWidths},
    {dividerGrid: {
      x: columnDividerOrigins,
      y: [0]
    }},
    {rowSize: childrenAsShape.rowSize}
  )
}
