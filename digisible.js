/*     Q1: Digisable
    1) Written with all different numbers // meaning no dupplicate
    2) None can be zero
    3) It is divisible by each of its digit
    //return true or false

    constraint 0 < a <= 10000
*/

/*
    Algorithm

    1.) Divide each of the input into single digit
    2.) Adding each digit into duplicateObj (type = object)
    3.) Using each of the input digit to divide the full input digit
    4.) Check if contain zero || negative || duplicate digit or not
    3.) return the result

*/




function isDigisible(digit) {
    const arrOfDigit = digit.toString().split("");
    const duplicateObj = {};
    for (let element of arrOfDigit) {
        duplicateObj[element] = (duplicateObj[element] || 0) + 1;
    }
    //if duplicate or negative
    for (let key in duplicateObj) {
        key = Number(key);
        if ((duplicateObj[key] > 1) || !key || (digit % key !== 0)) {
            return false; 
        }

    }
    return true

}

//Testing Output
//console.log(isDigisible(12));