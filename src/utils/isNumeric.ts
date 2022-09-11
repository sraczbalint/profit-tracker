/* eslint-disable no-restricted-globals */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isNumeric = (str: any) => {
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
};

export default isNumeric;
