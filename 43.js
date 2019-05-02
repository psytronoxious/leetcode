/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var sumTwoArr = function(a, b) {
	let aLen = a.length;
	let bLen = b.length;
	let minLen = Math.min(aLen, bLen);
	let maxLen = Math.max(aLen, bLen);
	let final = [];
	let iter = 1;
	let carry = 0;
	while (minLen >= iter) {
		let digit = a[aLen - iter] + b[bLen - iter] + carry;
		carry = parseInt(digit / 10);
		final.push(digit % 10);
		iter++;
	}
	while (maxLen >= iter) {
		if (aLen === maxLen) {
			let digit = a[aLen - iter] + carry;
			carry = parseInt(digit / 10);
			final.push(digit % 10);
			iter++;
		} else {
			let digit = b[bLen - iter] + carry;
			carry = parseInt(digit / 10);
			final.push(digit % 10);
			iter++;
		}
	}
	if (carry > 0) {
		final.push(carry);
	}
	return final.reverse();
};

var multiply = function(num1, num2) {
	let firstNum = [];
	let secondNum = [];
	let init = [];
	let carry = 0;
	let num1Len = num1.length;
	let num2Len = num2.length;
	if (num1Len >= num2Len) {
		firstNum = num1.split('');
		secondNum = num2.split('');
	} else {
		firstNum = num2.split('');
		secondNum = num1.split('');
		num1Len = num2.length;
		num2Len = num1.length;
	}
	firstNum.reverse();
	secondNum.reverse();
	if (num1Len===1){
		if (firstNum[0]==='0') return '0'
	}
	if (num2Len===1){
		if (secondNum[0]==='0') return '0'
	}
	// console.log(firstNum, secondNum, num1Len, num2Len);
	for (let i = 0; i < num2Len; i++) {
		// if (i>0) {
		// 	mult.push(0)
		// }
		let temp = [];
		for (let j = 0; j < num1Len; j++) {
			let place = firstNum[j] * secondNum[i] + carry;

			carry = parseInt(place / 10);
			temp[j] = place % 10;

			// console.log(firstNum[j], secondNum[i], temp, carry);
		}
		if (carry > 0) {
			temp.push(carry);
			carry = 0;
		}
		temp.reverse();
		for (let k = 0; k < i; k++) {
			temp.push(0);
		}
		// mult.push(temp);
		// console.log('just before: ', init, temp);
		init = sumTwoArr(init, temp);
	}

	return init.join("");
};

console.log(multiply((num1 = '123'), (num2 = '456')));
// console.log(sumTwoArr([ 4, 5, 6 ], [ 1, 3, 6, 8, 0 ]))
