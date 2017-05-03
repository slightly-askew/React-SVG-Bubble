//@flow

export type AdjustmentObject = {
  xAdjustment: number,
  yAdjustment: number,
  xThreshold: number,
  yThreshold: number,
}

const adjuster = (threshold: number, offset: number) => (
  (value: number):number => (
    value > threshold ?
    value + offset :
    value
  )
);

export default function getAdjustments ({
  xAdjustment, yAdjustment, xThreshold = 36, yThreshold = 35
  }:AdjustmentObject): Object {
    return {
      adjustX: adjuster(xThreshold, xAdjustment),
      adjustY: adjuster(yThreshold, yAdjustment)
    }
  }
