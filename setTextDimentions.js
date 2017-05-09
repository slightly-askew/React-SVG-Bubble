//@flow


//type def
type textConfig = [{
  textElement : {
    x: number,
    y: (i: number) => number
  }},{
  underline : {
    x: number,
    y: (i: number) => number,
    width: (child: string) => number
  }}
];
type Props = {
  firstItemY: number,
  firstItemX: number,
  textHeight: number,
  verticalMargin: number,
  columns: number,
  characterWidth: number,
  speachDirection: String<'up' | 'down' | 'left' | 'right'>,
  children: Array<string | [string, {target: string}]>
}

export default function ({
  firstItemY,
  firstItemX,
  textHeight,
  verticalMargin,
  columns,
  characterWidth,
  speachDirection,
  children
}: Props): textConfig {

  //methods
  const fitToWidth = (child: string):number => (
    characterWidth * child.length
  )
  const yPos = (i: number, adj: number = 0): number => (
    firstItemY +
    (i * textHeight) +
    (i * verticalMargin) +
    adj
  );
  const adjustedYPos = (adjustment: number) => (i) => yPos(i, adjustment);

  //config
  const config: textConfig = [
    {
    textElement : {
      x: textHeight,
      y: yPos
    }},{
    underline : {
      x: textHeight,
      y: adjustedYPos(4.5),
      width: fitToWidth
    }
  }]

  return config;
}
