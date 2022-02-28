class EmptyStack {
	isEmpty() {
		return true
	}

	push<T>(element: T) {
		return new NonEmptyStack(element)
	}
}

class NonEmptyStack<T> {
	constructor(private readonly topElement: T) {}

	isEmpty() {
		return false
	}

	peek() {
		return this.topElement
	}

	push(element: T) {
		return new NonEmptyStack(element)
	}
}

export const emptyStack = new EmptyStack()
