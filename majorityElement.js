// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

const majority = (nums) => {
    let numObj = {}
    let len = nums.length
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        if(numObj[num] === undefined){
            numObj[num] = 1
        } else {
            numObj[num] += 1
        }
    }
    return getKeyByValue(numObj, len)
}
const getKeyByValue = (object, len) =>{
    return Object.keys(object).find(key => object[key] > len /2 )
}
console.log(majority([3,2,3]))