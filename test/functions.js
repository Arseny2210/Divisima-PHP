// Function
function getName() {
	return 'Max'
}

//ES6
const getChannelNme = () => 'RED Group'

const getPrice = name => {
	if (name == 'Mercedes') return 10000
	if (name == 'Lada') return 1000
	return null
}

console.log('$', getPrice(''))
