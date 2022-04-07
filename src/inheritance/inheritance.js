class Action {
	constructor(actionName) {
		this.actionName = actionName
	}

	getName() {
		return this.actionName
	}

	do() {
		return 'do nothing'
	}
}

class Greet extends Action {
	constructor(person) {
		super('Greet')
		this.person = person
	}

	do() {
		return `hello ${ this.person }, ${ super.do() }`
	}
}

const a = new Greet('alice')

a.getName()

a.do()

// what about static props, how are they shared?

// what about props on prototype?
