/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	if (height.length < 2) return 0;
	let crests = [];
	for (let i = 0; i < height.length; i++) {
		if (typeof height[i - 1] === 'undefined') {
			if (height[i] >= height[i + 1]) {
				crests.push(i);
			}
			continue;
		}
		if (typeof height[i + 1] === 'undefined') {
			console.log('here', height[i], height[i - 1]);
			if (height[i] >= height[i - 1]) {
				crests.push(i);
			}
			continue;
		}
		console.log(height[i], height[i - 1], height[i + 1]);
		if (height[i] >= height[i - 1] && height[i] >= height[i + 1]) {
			crests.push(i);
		}
	}
	console.log(crests);
	
};

// console.log(maxArea([ 1, 8, 6, 2, 5, 4, 8, 3, 7 ]));
// console.log(maxArea([ 1, 2, 4, 3 ]));
console.log(maxArea([ 2, 3, 10, 5, 7, 8, 9 ]));
