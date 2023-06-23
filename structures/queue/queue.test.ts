import Queue from "./queue"

describe("Queue", () => {
  describe("dequeue()", () => {
    test("should return null when queue is empty", () => {
      const queue = new Queue()
      const actual = queue.dequeue()
      const expected = null
      expect(actual).toEqual(expected)
    })
    test("should return item from the front of the queue", () => {
      const queue = new Queue([1, 2, 3])
      const actual = queue.dequeue()
      const expected = 1
      expect(actual).toEqual(expected)
    })
    test("should remove item from the front of the queue", () => {
      const queue = new Queue([1, 2, 3])
      queue.dequeue()
      const actual = queue.read()
      const expected = 2
      expect(actual).toEqual(expected)
    })
  })

  describe("enqueue()", () => {
    test("should add item to the queue", () => {
      const queue = new Queue()
      queue.enqueue(1)
      const actual = queue.read()
      const expected = 1
      expect(actual).toEqual(expected)
    })
  })

  describe("read()", () => {
    test("should return null when queue is empty", () => {
      const queue = new Queue()
      const actual = queue.read()
      const expected = null
      expect(actual).toEqual(expected)
    })
    test("should return item from the front of the queue", () => {
      const queue = new Queue([1, 2, 3])
      const actual = queue.read()
      const expected = 1
      expect(actual).toEqual(expected)
    })
    test("should not remove item from the front of the queue", () => {
      const queue = new Queue([1, 2, 3])
      queue.read()
      const actual = queue.read()
      const expected = 1
      expect(actual).toEqual(expected)
    })
  })
})
