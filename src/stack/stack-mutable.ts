export class Stack<T> {
	private elements: T[] = []

	isEmpty(): boolean {
		return this.elements.length === 0
	}

	push(element: T): void {
		this.elements.push(element)
	}

	pop(): T {
		const element = this.elements.pop()
		if(element === undefined) {
			throw new Error('empty stack can not be popped')
		}
		return element
	}
}
