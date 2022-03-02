class Future<Error, Result> {
	constructor(private readonly promise: Promise<Result>) {}

	map<Out>(fn: (value: Result) => Out): Future<Error, Out> {
		return new Future(this.promise.then(fn))
	}
}

export const future = (promise: Promise<number>) => new Future(promise)
