class Box<T> {
	constructor(private readonly content: T) {}

	map<O>(transformFunction: (value: T) => O): Box<O> {
		return new Box(transformFunction(this.content))
	}
}

export const box = <T>(content: T) => new Box(content)
