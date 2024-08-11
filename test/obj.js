// Obj methods
const person = {
	name: 'Max',
	age: 23,
	city: 'Minsk',
	getName() {
		return this.name
	},
}

// console.log(person.getName())

const dividend = {
	profit: '$100 000',
}

// Объединение объектов
// console.log(Object.assign(person, dividend))
// console.log({ ...person, ...dividend })

// Entries
// console.log(Object.entries(person))

// Keys and values
// console.log(Object.keys(person))
// console.log(Object.values(person))
