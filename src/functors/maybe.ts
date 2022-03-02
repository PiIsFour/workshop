class Just<T> {
	constructor(private readonly value: T) {}

	map<O>(fn: (value: T) => O): Maybe<O> {
		return new Just(fn(this.value))
	}
}

class Nothing {
	map(): Nothing {
		return this
	}
}

export type Maybe<T> = Just<T> | Nothing

export const just = <T>(value: T): Maybe<T> => new Just(value)
export const nothing = <T>(): Maybe<T> => new Nothing()
