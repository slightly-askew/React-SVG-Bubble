//@flow

export type AdjustmentObject = {
  xAdjustment: number,
  yAdjustment: number,
  xThreshold: number,
  yThreshold: number
}

export type Adjustments = {
  adjustX: (number)=>number,
  adjustY: (number)=>number,
}

const adjuster = (threshold: number, offset: number) => (
  (value: number):number => (
    value > threshold ?
    value + offset :
    value
  )
);

export default function alterCoordinates ({
  xAdjustment,
  yAdjustment,
  xThreshold = 36,
  yThreshold = 35
}): Adjustments {
    return ({
      adjustX: adjuster(xThreshold, xAdjustment),
      adjustY: adjuster(yThreshold, yAdjustment)
    })
  }
