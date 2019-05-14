/**
 * @param {string} s
 * @return {number}
 */

var isPalindrome = function(s) {
	for (let i = 0; i < s.length / 2; i++) {
		if (s[i] != s[s.length - 1 - i]) {
			return false;
		}
	}
	return true;
};

var countSubstrings = function(s) {
	let total = 0;
	for(let i=0; i<s.length; i++){
		let j = 0;
		while (true) {
			let temp = s.substring(i - j, i + j + 1);
			// if (temp.length < lastPal.length) {
			// 	j++;
			// 	continue;
			// }
			if (isPalindrome(temp)) {
				total++
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
				if (isPalindrome(temp)) {
					j++;
					total++;
				} else break;
				if (j > i) break;
				if (i + j + 1 >= s.length) break;
			}
		}
	}
	return total;
};


console.log(countSubstrings("abc"))