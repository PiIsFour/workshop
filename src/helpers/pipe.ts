type Fn<A, B> = (value: A) => B

export function pipe<A>(value: A): A
export function pipe<A, B>(value: A, fn: Fn<A, B>): B
export function pipe<A, B, C>(value: A, fa: Fn<A, B>, fb: Fn<B, C>): C
export function pipe<A, B, C, D>(value: A, fa: Fn<A, B>, fb: Fn<B, C>, fc: Fn<C, D>): D
export function pipe<A, B, C, D, E>(value: A, fa: Fn<A, B>, fb: Fn<B, C>, fc: Fn<C, D>, fd: Fn<D, E>): E
export function pipe<T>(value: T, ...fns: Fn<any, any>[]): T {
	return fns.reduce(
		(previousResult, fn) => fn(previousResult),
		value,
	)
}

export function flow<A>() {
	function flow<B>(fn: Fn<A, B>): (value: A) => B
	function flow<B, C>(fa: Fn<A, B>, fb: Fn<B, C>): (value: A) => C
	function flow<B, C, D>(fa: Fn<A, B>, fb: Fn<B, C>, fc: Fn<C, D>): (value: A) => D
	function flow<B, C, D, E>(fa: Fn<A, B>, fb: Fn<B, C>, fc: Fn<C, D>, fd: Fn<D, E>): (value: A) => E
	function flow(...fns: Fn<any, any>[]) {
		return (value: any) => fns.reduce(
			(previousResult, fn) => fn(previousResult),
			value,
		)
	}
	return flow
}
