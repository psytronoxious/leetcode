/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	if (s.length === 0) return true;
	let iterOver = false;
	for (let i = 0, j = s.length - 1; !iterOver; ) {
		while (
			!(s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58) &&
			!(s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) && // upper alpha (A-Z)
			!(s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123)
		) {
			i++;
			if (i > j) {
				iterOver = true;
				break;
			}
		}
		while (
			!(s.charCodeAt(j) > 47 && s.charCodeAt(j) < 58) &&
			!(s.charCodeAt(j) > 64 && s.charCodeAt(j) < 91) && // upper alpha (A-Z)
			!(s.charCodeAt(j) > 96 && s.charCodeAt(j) < 123)
		) {
			j--;
			if (i > j) {
				iterOver = true;
				break;
			}
		}
		if (!iterOver) {
			if (s[i].toLowerCase() != s[j].toLowerCase()) return false;
		}

		i++;
		j--;
		if (i >= j) {
			iterOver = true;
		}
	}
	return true;
};
console.log(isPalindrome('A man, a plan, a canal: Panama'));
