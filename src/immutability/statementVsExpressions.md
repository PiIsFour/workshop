## statements
```ts
let a
a = 5
a += 1
const b = 1 + 1
if(a) {}
return a
throw a
function test() {}
```

## expressions
```ts
'hello'
a + 1
a
a ? 1 : 2
() => {}
5
{ name: 'test' }
```




## what about those
```ts
let c, d, i = 5

b ? a = 1 : c = 2
a = c = 5
if(a = b) {}
a = i++
```


## scope of effects
```ts
let sum
(a: number, b: number, c: number, d: number) => {
	// const cd = c * d
	// const ab = a * b
	// const sum = ab + cd
	sum = a*b
	sum += c*d
}
```
