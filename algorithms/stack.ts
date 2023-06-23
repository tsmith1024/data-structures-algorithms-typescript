import Stack from "../structures/stack/stack"

export function reverseString(str: string): string {
  let stack = new Stack()

  for (const letter of str) {
    stack.push(letter)
  }

  let reverse = ""

  while (!stack.isEmpty()) {
    reverse += stack.pop()
  }

  return reverse
}

export function isPalindrome(str: string): boolean {
  if (str.length == 0) {
    return false
  }

  let stack = new Stack()

  for (const letter of str) {
    stack.push(letter)
  }

  for (const letter of str) {
    if (letter !== stack.pop()) {
      return false
    }
  }
  return true
}

export function isBalanced(str: string): boolean {
  return false
}
