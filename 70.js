/**
 * @param {number} n
 * @return {number}
 */
function factorial(x) {
	if (x === 0) return 1;
	return x * factorial(x - 1);
}

var climbStairs = function(n) {
	if (n === 0) return 0;
	let maxPairs = parseInt(n / 2);
	let total = 0;
	for (let i = 1; i <= maxPairs; i++) {
		total = total + factorial(n-i)/(factorial(n-2*i)*factorial(i))
	}
	return total + 1
};

console.log(climbStairs(5));
