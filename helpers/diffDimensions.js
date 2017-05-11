//@flow

type dimensions = {
  x: number,
  y: number
};

const diffDimensions = (
  oldDimensions: dimensions,
  newDimensions: dimensions
): dimensions => ({
  x: newDimensions.x - oldDimensions.x,
  y: newDimensions.y - oldDimensions.y
});

export default diffDimensions;
