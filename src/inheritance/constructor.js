class ClassPerson {
	constructor(name) {
		this.name = name
	}

	sayHello() {
		return `hello, ${ this.name }`
	}
}

const a = new ClassPerson('Alice')

a.sayHello()

// the old way

function ConstructorPerson(name) {
	this.name = name
}

ConstructorPerson.prototype.sayHello = function () {
	return `hello, ${ this.name }`
}

const b = new ConstructorPerson('Bob')

b.sayHello()

// what is happening behind the scenes

const c = {}

c.__proto__ = ConstructorPerson.prototype

ConstructorPerson.call(c, 'Charles')

c.sayHello()
