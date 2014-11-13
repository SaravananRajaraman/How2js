//--------Check the duplicate value to push------------
function hasDuplicates(arr,value) {    
        if (arr.indexOf(value) !== -1) {
            return true;
        }      
    return false;
}
 
//example:
var arr=[0,1,2,3,4];
var value=10;
console.log(hasDuplicates(arr,value));

//----------is Number ---------------
function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
 
//example
isNumber(5a);//false
isNumber(5);//true