const test = 'global test'

export function globalClosure() {
	return test
}

export function createLocalClosure() {
	const test = 'local test'

	function innerFunction() {
		return test
	}

	return innerFunction
}

export function createCounter(start: number) {
	let count = start

	function change(add: number) {
		count += add
	}

	function inc() {
		change(1)
	}

	function getCount() {
		return count
	}

	return {
		inc,
		getCount,
	}
}

export const add = (a: number) => (b: number) => a + b
