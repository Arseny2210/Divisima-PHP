// ES10 - 2019

//flat
// const cars = ['merc', 'lada', 'audi', ['lambo', 'Cheery']]
// console.log(cars.flat())

const person = {
	name: 'Max',
	age: 23,
	city: 'Minsk',
	getName() {
		return this.name
	},
}

const personArr = [
	['name', 'Max'],
	['age', '23'],
]
// из массива в объект
console.log(Object.fromEntries(personArr))
