/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
	let iterOver = false;
	let deletedOnce = false;
	for (let i = 0, j = s.length - 1; !iterOver; ) {
		if (s[i] != s[j]) {
			if (deletedOnce) return false;
			i++;
			if (s[i] != s[j] || s[i+1]!=s[j-1]) {
				i--;
				j--;
				if (s[i] != s[j]) return false;
			}
			deletedOnce = true;
		} else {
			i++;
			j--;
		}

		if (i >= j) {
			iterOver = true;
		}
	}
	return true;
};

// console.log(validPalindrome('eddboebddcaacddkbebdde'));
console.log(
	validPalindrome(
		'aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga')
);
