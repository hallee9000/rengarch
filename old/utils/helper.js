export const numberToArray = (num) => {
	const arr = new Array(num)
	return arr.fill('').map((n, index) => index + 1)
}