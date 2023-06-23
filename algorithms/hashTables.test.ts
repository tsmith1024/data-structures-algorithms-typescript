import {
  findFirstNonDuplicate,
  findFirstRepeated,
  findMissingLetter,
  intersection,
} from "./hashTables"

describe("Hash Table Algorithms", () => {
  describe("intersection", () => {
    test("when one array is empty, should return an empty array", () => {
      let array1: number[] = []
      let array2 = [1, 2, 3]

      let actual = intersection(array1, array2)
      let expected: number[] = []
      expect(actual).toStrictEqual(expected)
    })

    test("when arrays don't intersect, should return an empty array", () => {
      let array1 = [4, 5, 6]
      let array2 = [1, 2, 3]

      let actual = intersection(array1, array2)
      let expected: number[] = []
      expect(actual).toStrictEqual(expected)
    })

    test("when arrays intersect fully, should return first array", () => {
      let array1 = [1, 2, 3]
      let array2 = [1, 2, 3]

      let actual = intersection(array1, array2)
      let expected: number[] = array1
      expect(actual).toStrictEqual(expected)
    })

    test("when array1 contains everything in array2, should return array1", () => {
      let array1 = [1, 2, 3]
      let array2 = [1, 2, 3, 4, 5, 6]

      let actual = intersection(array1, array2)
      let expected: number[] = array1
      expect(actual).toStrictEqual(expected)
    })

    test("when array2 contains everything in array1, should return array2", () => {
      let array1 = [1, 2, 3, 4, 5, 6, 7]
      let array2 = [1, 2, 3, 4, 5, 6]

      let actual = intersection(array1, array2)
      let expected: number[] = array2
      expect(actual).toStrictEqual(expected)
    })

    test("when arrays contain some matches, should return those matches", () => {
      let array1 = [1, 2, 4, 7, 9, 8, 12]
      let array2 = [1, 2, 3, 4, 5, 6]

      let actual = intersection(array1, array2)
      let expected: number[] = [1, 2, 4]
      expect(actual).toStrictEqual(expected)
    })
  })

  describe("findFirstRepeated", () => {
    test("when array is empty, should return null", () => {
      let array: string[] = []

      let actual = findFirstRepeated(array)
      expect(actual).toBeNull()
    })

    test("when array has one value in it, should return null", () => {
      let array: string[] = ["a"]

      let actual = findFirstRepeated(array)
      expect(actual).toBeNull()
    })

    test("when array has many values but nothing is repeated, should return null", () => {
      let array: string[] = ["a", "b", "hello", "you", "1ab2", "3"]

      let actual = findFirstRepeated(array)
      expect(actual).toBeNull()
    })

    test("when array has many values and one is repeated, should return repeated value", () => {
      let array: string[] = ["a", "b", "c", "a"]

      let actual = findFirstRepeated(array)
      let expected = "a"
      expect(actual).toStrictEqual(expected)
    })

    test("when array has many values and many repeat, should return the first repeated value", () => {
      let array: string[] = ["a", "b", "c", "d", "hello", "c", "a"]

      let actual = findFirstRepeated(array)
      let expected = "c"
      expect(actual).toStrictEqual(expected)
    })
  })

  describe("findMissingLetter", () => {
    test("when an incomplete sentence is passed, it should return the missing letter", () => {
      const sentence = "the quick brown box jumps over the lazy dog"
      const actual = findMissingLetter(sentence)

      const expected = "f"
      expect(actual).toStrictEqual(expected)
    })

    test("when another incomplete sentence is passed, it should return the missing letter", () => {
      const sentence = "the quick brown fox bumps over the lazy dog"
      const actual = findMissingLetter(sentence)

      const expected = "j"
      expect(actual).toStrictEqual(expected)
    })

    test("when a complete sentence is passed, it should return null", () => {
      const sentence = "the quick brown fox jumps over the lazy dog"
      const actual = findMissingLetter(sentence)

      expect(actual).toBeNull()
    })
  })

  describe("findFirstNonDuplicate", () => {
    test("when there are no nonduplicates, should be null", () => {
      const testVal = "abcddcba"

      const actual = findFirstNonDuplicate(testVal)
      expect(actual).toBeNull()
    })

    test("when there is one nonduplicate, it should be returned", () => {
      const testValue = "racecar"

      const actual = findFirstNonDuplicate(testValue)
      const expected = "e"
      expect(actual).toStrictEqual(expected)
    })

    test("when there are multiple duplicates, it should return the first found", () => {
      const testValue = "racecars"
      const actual = findFirstNonDuplicate(testValue)

      const expected = "e"
      expect(actual).toStrictEqual(expected)
    })
  })
})
