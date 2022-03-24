export const log = () => {
	console.log(42)
}

const a = 7
export function readA() {
	return a
}

export class Counter {
	private count = 0

	tick() {
		this.count++
	}

	read() {
		return this.count
	}

	reset(): void {
		this.count = 0
	}
}
