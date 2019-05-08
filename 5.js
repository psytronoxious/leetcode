/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome1 = function(s) {
	if (s.length <= 1) return s;
	let mainStack = [];
	let finalStack = [];
	let lastFinal = '';
	let popType = 0;
	for (let i = 0; i < s.length; i++) {
		if (mainStack[mainStack.length - 2] === s[i]) {
			finalStack.push(mainStack.pop());
			finalStack.push(mainStack.pop());
			popType = 2;
		} else if (mainStack[mainStack.length - 1] === s[i]) {
			finalStack.push(mainStack.pop());
			popType = 1;
		} else {
			mainStack = s.split('').slice(0, i + 1);
			let temp = '';
			if (popType == 1) {
				temp = s.substring(i - finalStack.length * 2, i);
			} else if (popType == 2) {
				temp = s.substring(i - 1 - (finalStack.length - 1) * 2, i);
			}
			// if(finalStack.length===1){
			// 	if (finalStack[0]===temp[0]){
			// 		temp = temp + finalStack[0]
			// 	}
			// }
			if (temp.length > lastFinal.length) {
				lastFinal = temp;
			} else {
				finalStack = [];
			}
			popType = 0;
		}
		console.log(i, mainStack, finalStack, lastFinal, popType);
	}
	let temp = '';
	if (popType == 1) {
		temp = s.substring(s.length - finalStack.length * 2, s.length);
	} else if (popType == 2) {
		temp = s.substring(s.length - 1 - (finalStack.length - 1) * 2, s.length);
	}
	if (temp.length > lastFinal.length) {
		lastFinal = temp;
	}
	if (lastFinal === '') return s[s.length - 1];
	return lastFinal;
};

var isPalindrome = function(s) {
	// console.log("in f: ", s);
	// return s.split('').reverse().join('') === s;
	for (let i = 0; i < parseInt(s.length / 2); i++) {
		if (s[i] !== s[s.length - 1 - i]) {
			return false;
		}
	}
	return true;
};

var longestPalindrome = function(s) {
	let lastPal = '';
	for (let i = 0; i < s.length; i++) {
		let j = 0;
		while (true) {
			let temp = s.substring(i - j, i + j + 1);
			if (temp.length < lastPal.length) {
				j++;
				continue;
			}
			if (isPalindrome(temp)) {
				if (temp.length >= lastPal.length) lastPal = temp;
				j++;
			} else {
				break;
			}
			if (j > i) break;
			if (i + j >= s.length) break;
		}
		if (s[i] === s[i + 1]) {
			let j = 0;
			while (true) {
				let temp = s.substring(i - j, i + j + 2);
				if (temp.length < lastPal.length) {
					j++;
					continue;
				}
				if (isPalindrome(temp)) {
					if (temp.length >= lastPal.length) lastPal = temp;
					j++;
				} else break;
				if (j > i) break;
				if (i + j + 1 >= s.length) break;
			}
		}
	}
	return lastPal;
};

console.log(longestPalindrome('a'));
