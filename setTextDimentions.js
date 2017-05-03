//@flow


//type def
export type textConfig = [{
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

export default function (props?: mixed[]): textConfig {

  //methods
  const startingPos: number = (props.position) === 'below' ? 58 : 36;
  const textHeight: number  = 36;
  const middleMargin: number  = 9;
  const characterLength: number  = 10;
  const fitToWidth = (child: string):number => (
    characterLength * child.length
  )
  const yPos = (i: number, adj: number = 0): number => (
    startingPos +
    (i * textHeight) +
    (i * middleMargin) +
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
