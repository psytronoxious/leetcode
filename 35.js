/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
// 	if (nums.length === 0) return 0;
// 	let pos = nums.indexOf(target);
// 	if (pos !== -1) return pos;
// 	else {
// 		let len = nums.length;
// 		for (let i=0; i< len; i++){
// 			if (target<nums[i]) return i;
// 		}
// 		return len;
// 	}
// };
// var traverse = function (arr, pos, target){
// 	if (arr[parseInt(pos/2)]===target){return parseInt(pos/2)}
// }
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

// console.log(searchInsert([1,3,5,6], 5))
// console.log(searchInsert([1,3,5,6], 0));
console.log(searchInsert([ 1, 3, 4, 5, 6, 7 ], 2));
// console.log(searchInsert([ 1,2, 3, 4, 5, 6, 7 ], 3));
// console.log(searchInsert([ 1,2, 3, 4, 5, 6, 7 ], 4));
// console.log(searchInsert([ 1,2, 3, 4, 5, 6, 7 ], 5));
// console.log(searchInsert([ 1,2, 3, 4, 5, 6, 7 ], 6));
// console.log(searchInsert([ 1,2, 3, 4, 5, 6, 7 ], 7));
// console.log(searchInsert([ 1,2, 3, 4, 5, 6, 7 ], 8));
