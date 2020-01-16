/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice
in the array, and it should return false if every element is distinct.
*/

const checker = (arr) => {
    let intObj = {}
    for(let i = 0; i < arr.length; i++){
        let item = arr[i]
        if(intObj[item] === undefined){
            intObj[item] = 1
        }
        else{
            intObj[item] += 1
            return true
        }
    }
    return false
}
console.log(checker([1,2,3]))