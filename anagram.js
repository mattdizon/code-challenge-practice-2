// Given two strings s and t , write a function to determine if t is an anagram of s.
const isAnagram = (s, t) => {
    let word = {}
    let word2 = {}
    if(s.length !== t.length){
        return false
    }
    for(let i = 0; i < s.length; i++){
        let curr1 = s[i]
        let curr2 = t[i]
        if(word[curr1] === undefined){
            word[curr1] = 1
        }else{
            word[curr1] += 1
        }
        if(word2[curr2] === undefined){
            word2[curr2] = 1
        }else{
            word2[curr2] += 1
        }
    } 
    for(let i = 0; i < t.length; i++){
        let curr = t[i]
        if(word[curr] !== word2[curr]){
            return false
        }
    }
    return true
}
console.log(isAnagram('cat', 'tac'))