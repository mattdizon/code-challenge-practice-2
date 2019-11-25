// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity

const singleNumber = (nums) =>{
    let numObj = {}
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        if(numObj[num] === undefined){
            numObj[num] = 1
        } else {
            numObj[num] += 1
        }
    }
    return getKeyByValue(numObj)
}
const getKeyByValue = (object, value) =>{
    return Object.keys(object).find(key => object[key] === 1)
}
singleNumber([2,2,1])