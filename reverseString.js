/*
    Given a string, reverse the orignal without returning anything. 
    Function should be void and should modify the original
    input: char array 
*/
const reverseString = (s) => {
    for(let i = 0; i < s.length/2; i++){
        let temp = s[i]
        s[i] = s[s.length-1-i]
        s[s.length-1-i] = temp
    }
}
