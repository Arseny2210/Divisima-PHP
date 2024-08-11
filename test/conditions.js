//Condition & ternary operator

// function getStatus(age) {
// 	if (age < 14) return 'Children'
// 	if (age < 20) return 'Teenager'
// 	if (age < 50) return 'Adult'

// 	return 'Old'
// }

// function getStatus(age) {
// 	if (age < 14) {
// 		return 'Children'
// 	} else if (age < 20) {
// 		return 'Teenager'
// 	} else if (age < 50) {
// 		return 'Adult'
// 	} else {
// 		return 'Old'
// 	}
// }

//Ternary
// const getStatus = age =>
// 	age < 14 ? 'Children' : age < 20 ? 'Teenager' : age < 50 ? 'Adult' : 'Old'

// console.log(getStatus(51))

//Switch
function getPrice(model) {
	switch (model) {
		case 'Mercedes':
		case 'Alfa Romeo':
			return '$100 000'
		case 'BMW':
			return '$80 000'
		case 'McLaren':
			return '$400 000'
		default:
			return null
	}
}

console.log(getPrice('Alfa Romeo'))
