// store data

// [] - shop
// [] - Cleaning
// [] - Buy

/*
	* LocalStorage - может хранить много инфы, хранит в строке, можно выставить время очистки и небезопасно (временные данные, которые не важны для безопасности)

	* SessionStorage - такой же как LocalStorage, только он действует пока не закроем браузер (временные данные, которые не важны для безопасности)

 * Cookies - самая продвинутая хрень (для ценной инфы и передача на серверную часть) 
	библиотека для удобного юза Cookies -  https://www.npmjs.com/package/js-cookie
 */

const todos = [
	{
		name: 'shop',
		isCompleted: true,
	},
	{
		name: 'Cleaning',
		isCompleted: true,
	},
	{
		name: 'Buy',
		isCompleted: false,
	},
]

// LocalStorage
// localStorage.setItem('todos', JSON.stringify(todos))
// console.log(JSON.parse(localStorage.getItem('todos')))

// SessionStorage
// sessionStorage.setItem('todos', JSON.stringify(todos))
// console.log(JSON.parse(sessionStorage.getItem('todos')))

// Cookies
// function getCookie(name) {
// 	let matches = document.cookie.match(
// 		new RegExp(
// 			'(?:^|; )' +
// 				name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
// 				'=([^;]*)'
// 		)
// 	)
// 	return matches ? decodeURIComponent(matches[1]) : undefined
// }

// document.cookie = `todos=${JSON.stringify(todos)};path=/`
// console.log(JSON.parse(getCookie('todos')))
