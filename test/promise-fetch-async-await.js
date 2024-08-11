// Fetch

// let isLoading = true

// Promise

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// 	.then(resp => resp.json())
// 	.then(json => console.log(json))
// 	.catch(e => console.error(e))
// 	.finally(() => {
// 		isLoading = false
// 	})

// Async, await
const fetchTodo = async () => {
	try {
		const resp = await fetch('https://jsonplaceholder.typicode.com/todos/2')
		const json = await resp.json()
		console.log(json)
	} catch (e) {
		console.error(e)
	} finally {
		isLoading = false
	}
}
fetchTodo()
