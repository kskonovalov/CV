import isJsonString from './isJsonString';

describe('isJsonString', () => {
    it('returns true for a valid JSON string', () => {
        const validJson = '{"name": "John", "age": 30}';
        expect(isJsonString(validJson)).toBe(true);
    });

    it('returns false for an invalid JSON string', () => {
        const invalidJson = '{"name": "John", "age": 30';
        expect(isJsonString(invalidJson)).toBe(false);
    });

    it('returns false for a non-JSON string', () => {
        const nonJsonString = 'Just a regular string';
        expect(isJsonString(nonJsonString)).toBe(false);
    });

    it('returns false for non-string types', () => {
        expect(isJsonString(123)).toBe(false);
        expect(isJsonString(null)).toBe(false);
        expect(isJsonString(undefined)).toBe(false);
        expect(isJsonString({})).toBe(false);
        expect(isJsonString([])).toBe(false);
    });
});
