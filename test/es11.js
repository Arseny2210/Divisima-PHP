//ES11 - 2020

const phone = {
	model: { name: 'Samsung' },
	price: 1000,
}

// console.log(phone?.model.name)

const brand = phone?.brand || 'samsung'
console.log(brand)
