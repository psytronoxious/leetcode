/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let j = 1;
	while (j < nums.length) {
		if (nums[j - 1] === nums[j]) {
			nums.splice(j, 1);
		} else j++;
	}
	return nums.length;
};

console.log(removeDuplicates([ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ]));
