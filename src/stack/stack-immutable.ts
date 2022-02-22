class EmptyStack {
	isEmpty(): this is EmptyStack {
		return true
	}

	push<T>(element: T): NonEmptyStack<T> {
		return new NonEmptyStack<T>(element, this)
	}
}

class NonEmptyStack<T> {
	constructor(private readonly topElement: T, private readonly previousStack: Stack<T>) {}

	isEmpty(): this is EmptyStack {
		return false
	}

	push(element: T): NonEmptyStack<T> {
		return new NonEmptyStack(element, this)
	}

	peek(): T {
		return this.topElement
	}

	pop(): Stack<T> {
		return this.previousStack
	}
}

export type Stack<T> = EmptyStack | NonEmptyStack<T>

export const emptyStack = new EmptyStack()
