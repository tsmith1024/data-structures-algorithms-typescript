export default class Stack<T> {
  private _storage: T[] = []

  constructor(elements: T[] = []) {
    this._storage = elements
  }

  push(item: T) {
    this._storage.push(item)
  }

  pop(): T | undefined {
    return this._storage.pop()
  }

  peek(): T | undefined {
    return this._storage.at(-1)
  }

  isEmpty(): boolean {
    return this.peek() === undefined
  }
}

let stack = new Stack<string>()

stack.push("a")
stack.push("b")
stack.push("c")
stack.pop()
