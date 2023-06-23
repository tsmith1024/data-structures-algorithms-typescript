import Stack from "./stack"

describe("Stack", () => {
  describe("when stack is constructed", () => {
    test("with no elements, stack should be empty", () => {
      let stack = new Stack<string>()
      expect(stack.isEmpty()).toBe(true)
    })

    test("with elements, stack should not be empty", () => {
      let stack = new Stack<string>(["a", "b"])
      expect(stack.isEmpty()).toBe(false)
    })
  })

  describe("push", () => {
    test("should add item to the top of the stack", () => {
      let stack = new Stack<string>(["a", "b"])
      stack.push("c")
      expect(stack.peek()).toBe("c")
    })
  })

  describe("pop", () => {
    test("should return undefined when stack is empty", () => {
      let stack = new Stack<string>()
      expect(stack.pop()).toBe(undefined)
    })

    test("should remove top item from the stack", () => {
      let stack = new Stack<string>(["a", "b"])
      expect(stack.pop()).toBe("b")
      expect(stack.peek()).toBe("a")
    })
  })

  describe("peek", () => {
    test("should return undefined when stack is empty", () => {
      let stack = new Stack<string>()
      expect(stack.peek()).toBe(undefined)
    })

    test("should return top item on stack when stack is not empty", () => {
      let stack = new Stack<string>(["a", "b"])
      expect(stack.peek()).toBe("b")
    })
  })

  describe("isEmpty", () => {
    test("should return true when stack is empty", () => {
      let stack = new Stack<string>()
      expect(stack.isEmpty()).toBe(true)
    })

    test("should return false when stack is not empty", () => {
      let stack = new Stack<string>(["a", "b"])
      expect(stack.isEmpty()).toBe(false)
    })
  })
})
