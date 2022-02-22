import { Stack } from './stack'

describe('empty stack', () => {
	const emptyStack = () => new Stack<number>()

	it('is empty', () => {
		const stack = emptyStack()
		expect(stack.isEmpty()).toBe(true)
	})

	it('can be pushed', () => {
		const stack = emptyStack()
		expect(() => {
			stack.push(5)
		}).not.toThrow()
	})

	it('throws when popped', () => {
		const stack = emptyStack()
		expect(() => {
			stack.pop()
		}).toThrow()
	})
})

describe('stack with one item', () => {
	const stackWithOneItem = <T>(item: T) => {
		const stack = new Stack<T>()
		stack.push(item)
		return stack
	}

	it('is not empty', () => {
		const stack = stackWithOneItem(3)
		expect(stack.isEmpty()).toBe(false)
	})

	it('pop returns the value', () => {
		const stack = stackWithOneItem(3)
		expect(stack.pop()).toBe(3)
	})

	it('is empty after pop', () => {
		const stack = stackWithOneItem(3)
		stack.pop()
		expect(stack.isEmpty()).toBe(true)
	})
})

describe('stack with two item', () => {
	const stackWithTwoItem = <T>(a: T, b: T) => {
		const stack = new Stack<T>()
		stack.push(a)
		stack.push(b)
		return stack
	}

	it('second pop returns the first item', () => {
		const stack = stackWithTwoItem(4, 5)
		stack.pop()
		expect(stack.pop()).toBe(4)
	})
})
