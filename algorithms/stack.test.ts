import { isPalindrome, reverseString } from "./stack"

describe("Stack Algorithms", () => {
  describe("reverseString()", () => {
    test("should return empty string when string is empty", () => {
      const testValue = ""
      const actual = reverseString(testValue)
      const expected = ""

      expect(actual).toStrictEqual(expected)
    })
    test("should return reversed string", () => {
      const testValue = "test value"
      const actual = reverseString(testValue)
      const expected = "eulav tset"

      expect(actual).toStrictEqual(expected)
    })
  })

  describe("isPalindrome()", () => {
    test("should return false when string is empty", () => {
      const testValue = ""
      const actual = isPalindrome(testValue)
      const expected = false

      expect(actual).toStrictEqual(expected)
    })
    test("should return true when string is a palindrome", () => {
      const testValue = "tacocat"
      const actual = isPalindrome(testValue)
      const expected = true

      expect(actual).toStrictEqual(expected)
    })

    test("should return false when string is not a palindrome", () => {
      const testValue = "this is not a palindrome"
      const actual = isPalindrome(testValue)
      const expected = false

      expect(actual).toStrictEqual(expected)
    })
  })

  describe("isBalanced()", () => {
    test("should return true when string is empty", () => {})
    test("should return true when there is nothing to balance", () => {})
    test("should return true when string is balanced", () => {})
    test("should return false when string is not balanced", () => {})
  })
})
