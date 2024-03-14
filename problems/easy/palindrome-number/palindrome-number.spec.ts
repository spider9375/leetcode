import {isPalindrome} from "./palindrome-number";

describe('palindrome-number', () => {
    test('string reversal - case1', () => {
        expect(isPalindrome(121, 'string')).toBe(true);
    })
    test('string reversal - case2', () => {
        expect(isPalindrome(-121, 'string')).toBe(false);
    })
    test('string reversal - case3', () => {
        expect(isPalindrome(10, 'string')).toBe(false);
    })

    test('no string reversal - case1', () => {
        expect(isPalindrome(121, 'noString')).toBe(true);
    })
    test('no string reversal - case2', () => {
        expect(isPalindrome(-121, 'noString')).toBe(false);
    })
    test('no string reversal - case3', () => {
        expect(isPalindrome(10, 'noString')).toBe(false);
    })
    test('no string reversal - case3', () => {
        expect(isPalindrome(11, 'noString')).toBe(true);
    })
})
