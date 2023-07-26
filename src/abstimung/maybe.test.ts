const div1 = (a: number, b: number): number | undefined => b === 0 ? undefined : a / b
const div2 = (a: number, b: number): Maybe<number> => b === 0 ? nothing() : just(a / b)
const p: Promise<number> = Promise.resolve(5)
const p2 = p.then(x => x * 2).then(x => x.toString())

type Age = number & {__tag?: 'Age'}

const toAge = (a: number): Maybe<Age> => a >= 0 && a < 100 ? just(a) : nothing()

const inc = (a: number) => a + 1

it('12 / 3 = 4', () => {
	expect(div1(12, 3)).toEqual(4)
	const temp = div1(12, 3)
	if(temp !== undefined) {
		expect(inc(temp)).toEqual(5)
	}
	expect(div2(12, 3).getOrDefault(-1)).toEqual(4)
	expect(div2(12, 3)
		.map(inc)
		.getOrDefault(-1),
	).toEqual(5)
	expect(div2(120, 0)
		.chain(toAge)
		.map(inc)
		.getOrDefault(-1),
	).toEqual(-1)

	// just((a: number) => (b: number) => a > b ? 'a is greater' : 'b is greater')
	// 	.ap(div2(1, 2))
	// 	.ap(just(5))
	const f1 = ap(div2(1, 0))
	const f2 = ap(just(5))
	const r = flow2(just((a: number) => (b: number): string => a > b ? 'a is greater' : 'b is greater'))(
		ap(div2(1, 2)),
		ap(just(5)),
	)
	const n = flow2(0)(
		inc,
		inc,
	)
	const r2 = f2(f1(just((a: number) => (b: number): string => a > b ? 'a is greater' : 'b is greater')))
	expect(r.getOrDefault('')).toEqual('b is greater')
})

it('12 / 3 = 4', () => {
	expect(div1(12, 0)).toEqual(undefined)
	expect(div2(12, 0).getOrDefault(-1)).toEqual(-1)
})

interface Maybe<T> {
	getOrDefault: (defaultValue: T) => T,
	map: <O>(func: (value: T) => O) => Maybe<O>,
	chain: <O>(func: (value: T) => Maybe<O>) => Maybe<O>
}

const ap = <A>(maybe: Maybe<A>) => <B>(fnMaybe: Maybe<(a: A) => B>): Maybe<B> =>
	fnMaybe.chain(fn => maybe.map(fn))

const pipe2 = <A, B, C>(f1: (a: A) => B, f2: (b: B) => C) => (value: A): C => f2(f1(value))
const flow2 = <A>(value: A) => <B, C>(f1: (a: A) => B, f2: (b: B) => C): C => f2(f1(value))

function just<T>(value: T): Maybe<T> {
	return {
		getOrDefault: () => value,
		map: func =>
			just(func(value)),
		chain: func => func(value),
	}
}

function nothing<T>(): Maybe<T> {
	return {
		getOrDefault: (a: T) => a,
		map: nothing,
		chain: nothing,
	}
}

describe('Maybe', () => {
	it('should returns 5 since it has the value', () => {
		const maybe = just(5)

		expect(maybe.getOrDefault(0)).toEqual(5)
	})

	it('should returns 42 since it has the value', () => {
		const maybe = just(42)

		expect(maybe.getOrDefault(0)).toEqual(42)
	})

	it('we can map', () => {
		const maybe = just(42)

		const result = maybe.map(inc)// TODO: fix type, add to nothing and explain why this is still liskov...

		expect(result.getOrDefault(0)).toEqual(43)
	})

	it('should return 0 since we have nothing', () => {
		const maybe = nothing<number>()

		expect(maybe.getOrDefault(0)).toEqual(0)
	})

	it('should return 42 since we have nothing', () => {
		const maybe = nothing<number>()

		expect(maybe.getOrDefault(42)).toEqual(42)
	})
})
