// spread/rest

// const lang = {
// 	name: 'RU',
// 	level: 'difficult',
// }

// const langPopulation = {
// 	population: 400000000,
// }

// console.log({ ...lang, ...langPopulation })

// const nameFirst = ['Max', 'Evgeny', 'Aynaz']
// const nameSecond = ['Anarbek', 'Vitaly', 'Juby']

//console.log([...nameFirst, ...nameSecond]) // nameFirst.concat(nameSecond)

const { name, ...rest } = {
	name: 'RU',
	level: 'difficult',
}
console.log(rest)

const [firstName, secondName, lastName] = ['Anarbek', 'Vitaly', 'Juby']
console.log(secondName)
