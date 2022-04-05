# What is "this"



## What we expect from other languages

```js
class User{
  constructor(name){
    this.name = name
  }
  getName(){
    return this.name
  }
}
let a = new User('Alice')
let b = new User('Bob')
```



## But how does "this" know?

```js
function test(){
    return this.name
}
```



## Just what's before the dot

```js
function test(){
    return this
}

let a = {
    name: 'a',
    test,
}

let b = {
    name: 'b'
}
b.test = test

let c = Object.create(b)
c.name = 'c'
```



## What about function expressions

```js
let a = {
    name: 'a',
    test: function(){
        return this
    }
}

let test = a.test

let b = {
    name: 'b',
    test,
}
```



## What about arrow functions

```js
let test = () => this

let a = {
    name: 'a',
    getArrow() {
        return () => this
    }
}

let b = {
    name: 'b',
    test: () => this
}

let c = {
    test: this
}
```



## Do we need bind, apply or call?

```js
function test() {
    return this
}

let a = {
    name: 'a'
}

let b = {
    name: 'b'
}

let x = () => this
```

```js
function test(param1, param2) {
    console.dir(param1)
    console.dir(param2)
    return this
}
```

