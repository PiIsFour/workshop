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
