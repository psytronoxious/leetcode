/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement1 = function(nums, val) {
	let len = nums.length;
	if (len === 0) return 0;

	let last_same = nums.length - 1;
	for (let i = 0; i < len; i++) {
		// if (i === last_same) return last_same;
		if (nums[i] === val) {
			while (nums[last_same] === val) {
				last_same = last_same - 1;
			}
			if (last_same < i){ return i}
			nums[i] = nums[last_same];
			nums[last_same] = val;
		}
	}
	return len;
};
var removeElement1 = function(nums, val) {
	if (nums.length === 0) return 0;

}

console.log(removeElement([ 3, 3, 3, 3, 3], 3));
