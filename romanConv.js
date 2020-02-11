/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

input: roman number
output: integer
process: read string, as I pass through string I want to find out what the current letter is
read first number and store what the char is and the count of that one
iterate and read second number, if the second number is the same keep count of it
if second number is different figure out what the current conversion should be ie:
    IV = we say it is 4
    VI we say 5


    VIII


*/


const romanToInt = (s) => {
    let table = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        //if the next roman numeral is larger, then we know we have to subtract this number
        if (table[s[i]] < table[s[i+1]]) {
            result-=table[s[i]]
        } 
        //otherwise, add like normal. 
        else {
            result+=table[s[i]]
        }
    }
    return result
};
console.log(romanToInt('VII'))
