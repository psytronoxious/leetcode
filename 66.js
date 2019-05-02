/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
// 	let totalDecimals = digits.length;
// 	let num = digits.reduce((sum, d, i) => {
// 		totalDecimals -= 1;
// 		return sum + d * Math.pow(10, totalDecimals);
// 	}, 0);
// 	return (num + 1).toString().split('').map(function(x) {
// 		return parseInt(x, 10);
// 	});
// };

var plusOne = function(digits) {
	let len = digits.length;
	if (len===0) return [1];
	let iter = 0 
	while(iter< len){
		if (digits[len-1 - iter]<=8) {
			digits[len-1 - iter] = digits[len-1 - iter] + 1
			break
		}else{
			digits[len-1 - iter] = 0
			iter = iter +1
		}
	}
	if (iter === len) digits.unshift(1)
	return digits
}
console.log(plusOne([ 9,9, 9]));
