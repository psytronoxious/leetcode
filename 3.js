/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let arr  = []
	let lastMax = 0
	for (let i=0; i<s.length; i++){
		if (arr.indexOf(s[i]) ===-1){
			arr.push(s[i])
		}else{
			let len = arr.length
			if (len>lastMax) lastMax = len;
			arr.splice(0, arr.indexOf(s[i])+1) 
			arr.push(s[i])
		}
	}
	if (lastMax> arr.length) return lastMax
	else return arr.length	
};

console.log(lengthOfLongestSubstring('abcabcbb'));
