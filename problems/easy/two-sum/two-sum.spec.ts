import {twoSum} from "./two-sum";

describe('two sum', () => {
    test('bruteForce - case1', () => {
        expect(twoSum([2,7,11,15], 9, 'bruteForce')).toEqual([0, 1]);
    })
    test('bruteForce - case2', () => {
        expect(twoSum([3,2,4], 6, 'bruteForce')).toEqual([1, 2]);
    })
    test('bruteForce - case1', () => {
        expect(twoSum([3,3], 6, 'bruteForce')).toEqual([0, 1]);
    })

    test('hashmap - case1', () => {
        expect(twoSum([2,7,11,15], 9, "hashmap")).toEqual([0, 1]);
    })
    test('hashmap - case2', () => {
        expect(twoSum([3,2,4], 6, "hashmap")).toEqual([1, 2]);
    })
    test('hashmap - case1', () => {
        expect(twoSum([3,3], 6, "hashmap")).toEqual([0, 1]);
    })
})
