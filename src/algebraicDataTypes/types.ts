type Two = 'one' | 'two'
type Three = 1 | 2 | 3

interface HowMany {
	a: boolean
	b: 'test'
	c?: 'value'
	d?: boolean
	e: Two
	f?: Two
	g: Three
	h: string
	i?: string
	j: number
	k?: number
}

export const many: HowMany = {
	a: true,
	b: 'test',
	c: 'value',
	d: true,
	e: 'one',
	f: 'one',
	g: 1,
	h: 'h',
	i: 'i',
	j: 1,
	k: 1,
}

type Product = {
	first: Two
	second: Three
}

export const p: Product = {
	first: 'two',
	second: 2,
}

type Sum = {
	first: Two
} | {
	second: Three
}

export const s: Sum = {
	second: 3,
}

type Sum2 = Two | Three

export const s2: Sum2 = 2
