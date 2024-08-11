// default param
const getPrice = (name = 'Mercedes') => {
	if (name == 'Mercedes') return 10000
	if (name == 'Lada') return 1000
}
console.log(getPrice())
