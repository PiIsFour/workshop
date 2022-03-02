class Box<T> {
	constructor(private readonly content: T) {}

	map<Out>(fn: (value: T) => Out): Box<Out> {
		return new Box(fn(this.content))
	}
}

export const box = <T>(value: T) => new Box(value)
