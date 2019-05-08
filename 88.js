/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var binarySearch = function(arr, l, r, target) {
	if (r >= l) {
		var mid = parseInt((r + l) / 2);
		if (arr[mid] === target) {
			return mid;
		}
		if (target < arr[mid]) {
			return binarySearch(arr, l, mid - 1, target);
		} else {
			return binarySearch(arr, mid + 1, r, target);
		}
	} else {
		return l;
	}
};

var searchInsert = function(nums, target) {
	let len = nums.length;
	if (len === 0) return 0;
	let l = 0;
	let r = len - 1;
	var final = binarySearch(nums, l, r, target);
	return final;
};

var merge = function(nums1, m, nums2, n) {
	nums1.splice(m, m+n)
	let i = 0
	while(i<n){
		nums1.splice(searchInsert(nums1, nums2[i]), 0, nums2[i])
		i++
	}
	return nums1
};

console.log(merge((nums1 = [ 1, 2, 3, 0, 0, 0 ]), (m = 3), (nums2 = [ 2, 5, 6 ]), (n = 3)));
