//@flow

import createRowDataShape from '../helpers/createRowDataShape';

type Props = {
  textItems: Array<{
    label: string,
    target: string
  }>,
  characterWidth: number,
  minTextWidth: number,
  textPadding: {
    ['top' | 'right' | 'bottom' | 'left'] : number
  },
  textHeight: number,
  textMargin: number,
  dividerWidth: number,
  textColumns: number,
  rowSize: number,
  textboxOrigin: {
    x: number,
    y: number
  }
}

export default (props: Props) => {

    const checkItemAgainstMax = (i:number, max: number): number => {
      return (
        Math.max((!!max ? max : 0),(i ? i : 0))
      )
    };

    const getMaximumColumnCount = (rowShape:Array<Array<number>>): number[] => {
      const columnSizes = new Array(props.textColumns).fill(1);
      rowShape.map((row) => (
        row.map((val, i) => (
          columnSizes[i] = checkItemAgainstMax(val, columnSizes[i])
        ))
      ))
      return columnSizes;
    }

    const childrenAsChars: Array<number> = props.textItems.map(c => c.label.length);
    const childrenAsWidths: Array<number> = childrenAsChars.map(c => c * props.characterWidth)
    const childrenAsShape = createRowDataShape(childrenAsWidths, props.textColumns)
    const colWidths = getMaximumColumnCount(childrenAsShape.shape);
    const columnMargin = props.textMargin * 3

    console.log(colWidths)

    const textOriginsX: Array<number> = colWidths
    .reduce((acc, c, i) => (
      acc.concat((acc[i]) + c +
      (columnMargin * 2) +
      props.dividerWidth
    )),[0])
    .slice(0, props.textColumns);

    console.log(textOriginsX)

    const getLastValue = (a: Array<number>): number => a.slice().pop();

    const textFullWidth: number = getLastValue(textOriginsX) + getLastValue(colWidths);

    const columnDividerOrigins =
    textOriginsX.slice(1)
    .map(o => o - columnMargin - props.dividerWidth)

    // Height
    const lines = props.textItems.length;
    const linesAccountingForColumns = Math.ceil(lines / props.textColumns);

    const lineHeight = props.textHeight + props.textMargin;

    const calculateYOrigins = (lines, height) => {

      const origins = []

      for (let i = 0; i < lines; i++) {
        origins.push(i*height);
      }

      return origins
    }

    const textOriginsY = calculateYOrigins(linesAccountingForColumns, lineHeight)

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
    {colSize: childrenAsShape.colSize}
  )
}
