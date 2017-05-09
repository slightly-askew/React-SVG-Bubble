//@flow

const flattenObject = (a: mixed[], o: {"C": mixed}): mixed[] => (

  a.concat( Object.entries(o) )
);

const flattenAryOfObjects = (a: Array<{"C": mixed}>): mixed[] => (

  a.reduce( flattenObject , [] )
);

export default flattenAryOfObjects;
