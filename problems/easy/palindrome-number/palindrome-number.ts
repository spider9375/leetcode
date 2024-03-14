/*
9. Palindrome Number
Solved
Easy
Topics
Companies
Hint
Given an integer x, return true if x is a
palindrome
, and false otherwise.



Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


Constraints:

-231 <= x <= 231 - 1


Follow up: Could you solve it without converting the integer to a string?
 */

function stringReversal(x: number): boolean {
    return x.toString() === x.toString().split("").reverse().join("");
}

function withoutStringReversal(x: number): boolean {
    if (x < 0 || (x / 10 > 0 && x % 10 === 0)) {
        return false;
    }

    if (x < 10) {
        return true;
    }

    let half = 0;

    while (x > half) {
        half = half * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return x === half || x === Math.floor(half / 10);
}

export function isPalindrome(x: number, approach: 'string' | 'noString'): boolean {
    switch (approach) {
        case "string":
            return stringReversal(x);
        case "noString":
            return withoutStringReversal(x);
    }
}
