/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
	if (k === 0) return false;
	if (nums.length <= 1) return false;
	if (t < 0) return false;
	let diffArr = [];
	for (let i = 1; i < nums.length; i++) {
		diffArr[i % k] = nums[i] - nums[i - 1];
		if (
			Math.abs(
				diffArr.reduce((init, val) => {
					return init + val;
				}, 0)
			) <= t
		) {
			return true;
		}
	}
	if (nums.length % k + 1 < diffArr.length - 1) {
		diffArr[nums.length % k + 1] = nums[nums.length % k] - nums[nums.length - 1];
		if (
			Math.abs(
				diffArr.reduce((init, val) => {
					return init + val;
				}, 0)
			) <= t
		) {
			return true;
		}
	}
	for (let i = 0; i < diffArr.length; i++) {
		if (diffArr[i] !== null && Math.abs(diffArr[i]) <= t) {
			return true;
		}
	}
	return false;
};

// console.log(containsNearbyAlmostDuplicate([ 0, 1, 2, 3, 4, 1 ], 5, 0));
console.log(containsNearbyAlmostDuplicate([ 2, 4 ], 1, 1));
// console.log(containsNearbyAlmostDuplicate([ 2, 0, -2, 2 ], 2, 1));
