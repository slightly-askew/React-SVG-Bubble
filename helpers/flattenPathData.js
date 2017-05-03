//@flow

const flattenObject = (a, o): Array<mixed> => a.concat(Object.entries(o));

const flattenAryOfObjects = (ary: Array<Object>): Array<mixed> => ary.reduce(flattenObject, []);

export default flattenAryOfObjects;
