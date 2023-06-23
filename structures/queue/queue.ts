export default class Queue<T> {
  private _storage: T[] = []

  constructor(elements: T[] = []) {
    this._storage = elements
  }

  read(): T | null {
    return this._storage[0] || null
  }

  dequeue(): T | null {
    return this._storage.shift() || null
  }

  enqueue(item: T) {
    return this._storage.push(item)
  }
}
