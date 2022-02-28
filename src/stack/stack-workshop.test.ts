import { emptyStack } from './stack-workshop'

describe('an empty stack', () => {
	it('is empty', () => {
		expect(emptyStack.isEmpty()).toBe(true)
	})

	it('can push something', () => {
		expect(() => {
			emptyStack.push(5)
		}).not.toThrow()
	})
})

describe('an stack with one element', () => {
	const stack = emptyStack.push('hello world')

	it('is not empty', () => {
		expect(stack.isEmpty()).toBe(false)
	})

	it('peek return the element', () => {
		expect(stack.peek()).toBe('hello world')
	})
})

describe('a stack with two elements', () => {
	const stack = emptyStack
		.push(1)
		.push(2)

	it('peek we see the second element', () => {
		expect(stack.peek()).toBe(2)
	})
})
