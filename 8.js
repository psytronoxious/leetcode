/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let num = 0;
    let s = str.trim();
    if(s[0]==="-"){
        let min = -1*Math.pow(2, 31);
        for(let i=1; i<s.length; i++){
            let charCode = s.charCodeAt(i);
            if(charCode<58 && charCode>47){
                num = num*10 +  charCode-48
                if(-1*num<=min) return min;    
            }else{
                if(-1*num<=min) return min;    
                return -1*num;        
            } 
            
        }
        return -1*num;
    }else if(s[0]==="+"){
        let max = Math.pow(2, 31)-1;
        for(let i=1; i<s.length; i++){
            let charCode = s.charCodeAt(i);
            if(charCode<58 && charCode>47){
                num = num*10 +  charCode-48
                if(num>=max) return max;    
            }else{
                if(num>=max) return max;    
                return num;
            }
            
        }
        return num;
    }else{
        let max = Math.pow(2, 31)-1;
        for(let i=0; i<s.length; i++){
            let charCode = s.charCodeAt(i);
            if(charCode<58 && charCode>47){
                num = num*10 +  charCode-48
                if(num>=max) return max;    
            }else{
                if(num>=max) return max;    
                return num;
            }
            
        }
        return num;
    }
};