// intersection takes two arrays and
// returns an array containing
// the elements found in both
export function intersection<T>(array1: T[], array2: T[]): T[] {
  let array1Map: Map<T, boolean> = new Map()

  array1.forEach((item) => {
    array1Map.set(item, true)
  })

  let results: T[] = []
  array2.forEach((item) => {
    if (array1Map.get(item)) {
      results.push(item)
    }
  })
  return results
}

// findFirstRepeated takes an array and
// returns the first element that is repeated
// if no repeats are found, returns undefined
export function findFirstRepeated(array: string[]): string | null {
  let arrayMap: Map<string, boolean> = new Map()

  let result: string | null = null
  for (const element of array) {
    if (arrayMap.get(element)) {
      result = element
      break
    }
    arrayMap.set(element, true)
  }
  return result
}

export function findMissingLetter(sentence: string): string | null {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"

  let alphaArray = alphabet.split("")

  let sentenceMap: Map<string, boolean> = new Map()

  for (const letter of sentence) {
    sentenceMap.set(letter, true)
  }

  for (const letter of alphaArray) {
    if (!sentenceMap.get(letter)) {
      return letter
    }
  }

  return null
}

export function findFirstNonDuplicate(test: string): string | null {
  const letterMap: Map<string, number> = new Map()

  for (const letter of test) {
    if (letterMap.get(letter)) {
      letterMap.set(letter, letterMap.get(letter)! + 1)
    } else {
      letterMap.set(letter, 1)
    }
  }

  for (const letter of letterMap.keys()) {
    if (letterMap.get(letter) == 1) {
      return letter
    }
  }

  return null
}
