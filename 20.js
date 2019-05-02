/**
 * @param {string} s
 * @return {boolean}
 */

let openers = ['(', '{', '['];
let toups  = new Map()
toups.set(")", "(");
toups.set("]", "[");
toups.set("}", "{");
var isValid = function (s) {
	let open = []
	for (let p of s) {
		if (openers.indexOf(p)!== -1){
			open.push(p)
		}else if(toups.get(p) ===open[open.length-1]){
			 open.pop()
		}else{
			return false
		}
	}

	if (open.length>0){
		return false
	}else {
		return true
	}
};

console.log(isValid("([)]")) 