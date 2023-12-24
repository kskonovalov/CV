const isJsonString = (str) => {
    if (
        Number(str) === str
        || str === null
        || typeof str === 'undefined'
    ) {
        return false;
    }
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export default isJsonString;