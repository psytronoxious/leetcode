/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	let final = [];
	let goingForward = true;
	let forwardCounter = 0;
	let reverseCounter = 0;
	for (let i = 0; i < s.length; i++) {
		if (goingForward) {
			final[forwardCounter] = (final[forwardCounter] || '') + s[i];
			forwardCounter++;
		} else {
			final[numRows - 1 - reverseCounter - 1] = final[numRows - 1 - reverseCounter - 1] + s[i];
			reverseCounter++;
		}
		if (forwardCounter === numRows) {
			forwardCounter = 0;
			goingForward = false;
		}
		if (reverseCounter >= numRows - 2) {
			reverseCounter = 0;
			goingForward = true;
		}
	}
	return final.reduce((sum, val) => {
		return sum + val;
	}, '');
};
