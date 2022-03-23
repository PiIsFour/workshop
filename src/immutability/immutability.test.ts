import { Stack } from '../stack/stack-mutable'
import { Stack as IStack, emptyStack } from '../stack/stack-immutable'

const popTimesCallback = (stack: Stack<number>, getMultiplier: () => number) => {
	if(stack.isEmpty()) {
		return 0
	}

	const multiplier = getMultiplier()
	const value = stack.pop()
	return value * multiplier
}

xit('why do we need this', () => {
	const stack = new Stack<number>()
	stack.push(5)

	const getMultiplier = () => {
		const value = stack.pop()
		return value >= 10 ? 0.1 : 1
	}

	expect(popTimesCallback(stack, getMultiplier)).toBe(5)
})

const popTimesCallback2 = (stack: IStack<number>, getMultiplier: () => number): { value: number, stack: IStack<number>} => {
	if(stack.isEmpty()) {
		return {
			value: 0,
			stack,
		}
	}

	const multiplier = getMultiplier()
	const value = stack.peek()
	const newStack = stack.pop()
	return {
		value: value * multiplier,
		stack: newStack,
	}
}

xit('we can not cheat ourself', () => {
	const stack = emptyStack
		.push(5)

	const getMultiplier = () => {
		const value = stack.peek()
		stack.pop()
		return value >= 10 ? 0.1 : 1
	}

	const result = popTimesCallback2(stack, getMultiplier)
	expect(result.value).toBe(5)
	expect(result.stack).toBe(emptyStack)
})
