//@flow
export default function (children: Array<string>) {
  const charSize = 9.5;

  const listItems = children;
  const listLength = listItems.length;

  const getCharBox = (listItems) => {
    const calcLatChars = (listItems) => {
      return (
        Math.max(...listItems.map(l => l.length))
      )
    };
    return [calcLatChars(listItems),listLength]
  };

  const calcSvgDimentions = (charBoxAry) => {

    const boxWidth = charBoxAry[0] * charSize;
    const listHeight = charBoxAry[1];

    const xOffset = (boxWidth - 18) > 72 ? boxWidth - 90 : 0;
    const yOffset = (listHeight: number) => {
      if (listHeight > 0) {
        return 36 + ((listHeight - 1 > 0 ? listHeight - 1 : 0) * 45)
      }
      return 0
    };
    return(
      {
        bubbleData: {
          xOffset: xOffset,
          yOffset: yOffset(listHeight),
          width: xOffset + 180,
          height: yOffset(listHeight) + 54,
          children: listItems,
        }
      });
    };

  return calcSvgDimentions(getCharBox(listItems));
};
