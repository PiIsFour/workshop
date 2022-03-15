export const log = () => {
	return 42
}

let a = 7
export function readA() {
	return a++
}

export class Counter {
	private count = 0

	tick() {
		this.count++
	}

	read() {
		const temp = this.count
		this.count = 0
		return temp
	}
}
