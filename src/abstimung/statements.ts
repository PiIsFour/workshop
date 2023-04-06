
export function test(input: number): number {
	const x = getX(input)
	if(input > 5) {
		return Math.floor(3.4)
	} else {
		return Math.floor(5.2)
	}
	return x
}

function getX(input: number) {
	if(input > 5) {
		return Math.floor(3.4)
	} else {
		return Math.floor(5.2)
	}
}

function round(state: Readonly<{
	x: number
}>) {
	state.x = Math.floor(5.2)
}

function main(xxx: number[]): void {
	const arr = xxx.map(i => i + 1)
	const x = test(2)
	const filteredArr = arr.filter(i => i > 5)
	filteredArr
	updateX(x)
}

function updateX(x: number) {
	fetch('update', {
		method: 'POST',
		body: JSON.stringify({
			x,
		}),
	})
}

