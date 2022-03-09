const test = 'hello world'

export function testFn() {
	return test
}

export function createClosure() {
	const test = 'hello world'

	return function () {
		return test
	}
}

export const add = (a: number) => (b: number) => a + b

function counter() {
	let count = 0

	return {
		inc: () => {
			count++
		},
		getValue: () => count,
	}
}
