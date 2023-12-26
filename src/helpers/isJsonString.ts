const isJsonString = (
  str: string | number | null | undefined | object,
): boolean => {
  if (Number(str) === str || str === null || typeof str === 'undefined') {
    return false;
  }
  try {
    JSON.parse(str.toString());
  } catch (e) {
    return false;
  }
  return true;
};

export default isJsonString;
