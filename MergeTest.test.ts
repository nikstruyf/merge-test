import { merge } from "./MergeTest";

describe('testing merge 1', () => {
    test('input [] and [] should got []', () => {
        expect(merge([], [])).toEqual([]);
    });
});

describe('testing merge 2', () => {
    test('input [1, 2, 3, 4, 5] and [] should got [1, 2, 3, 4, 5]', () => {
        expect(merge([1, 2, 3, 4, 5], [])).toEqual([1, 2, 3, 4, 5]);
    });
});

describe('testing merge 3', () => {
    test('input [1, 3, 5, 7, 9] and [2, 4, 6, 8, 10] should got [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
        expect(merge([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});

describe('testing merge 4', () => {
    test('input [1, 2, 3, 4, 7, 8, 9] and [2, 4, 6, 8, 10] should got [1, 2, 2, 3, 4, 4, 6, 7, 8, 8, 9, 10]', () => {
        expect(merge([1, 2, 3, 4, 7, 8, 9], [2, 4, 6, 8, 10])).toEqual([1, 2, 2, 3, 4, 4, 6, 7, 8, 8, 9, 10]);
    });
});

describe('testing merge 5', () => {
    test('input [1, 2, 3, 4, 5] and [6, 7, 8, 9, 10] should got [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
        expect(merge([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});

describe('testing merge 6', () => {
    test('input [-5, -3, -1] and [-6, -4, -2] should got [-6, -5, -4, -3, -2, -1]', () => {
        expect(merge([-5, -3, -1], [-6, -4, -2])).toEqual([-6, -5, -4, -3, -2, -1]);
    });
});

describe('testing merge 7', () => {
    test('input [3, 3, 3, 3, 3, 7, 7, 7, 7] and [5, 5, 5, 5, 5] should got [3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 7, 7, 7, 7]', () => {
        expect(merge([3, 3, 3, 3, 3, 7, 7, 7, 7], [5, 5, 5, 5, 5])).toEqual([3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 7, 7, 7, 7]);
    });
});