/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let z = 1.0;
    while (true){
	    z = z- ((z*z) - x)/(2*z)
	    if (z*z-x<1) break
    }
    return parseInt(z)
};

console.log(mySqrt(4000000000))