import { emptyStack, Stack } from './stack-immutable'

describe('an empty immutable stack', () => {
	it('is empty', () => {
		expect(emptyStack.isEmpty()).toBe(true)
	})

	it('can be pushed', () => {
		expect(() => {
			emptyStack.push(5)
		}).not.toThrow()
	})
})

describe('stack with one element', () => {
	const stack = emptyStack.push('hello')

	it('after push is not empty', () => {
		expect(stack.isEmpty()).toBe(false)
	})

	it('peek show the value', () => {
		expect(stack.peek()).toBe('hello')
	})

	it('after pop is empty', () => {
		const poppedStack = stack.pop()
		expect(poppedStack.isEmpty()).toBe(true)
	})
})

describe('stack with two elements', () => {
	const stack = emptyStack
		.push(1)
		.push(2)

	it('peek shows the second value', () => {
		expect(stack.peek()).toBe(2)
	})

	it('after pop is not empty', () => {
		const popped = stack.pop()
		expect(popped.isEmpty()).toBe(false)
	})

	it('after pop peek shows the first value', () => {
		const popped = stack.pop()
		if(popped.isEmpty()) {
			throw new Error('stack should not be empty')
		}
		expect(popped.peek()).toBe(1)
	})
})

// it('playground', () => {
// 	const stack = emptyStack
// 		.push(1)
// 		.push(2)
// 		.pop()

// 	if(!stack.isEmpty()) {
// 		stack.pop()
// 	}

// 	let typedStack = emptyStack.push(1).pop()
// 	if(typedStack.isEmpty()) {
// 		typedStack = typedStack.push('hello world')
// 	}
// })
