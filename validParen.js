// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/*
given an array of different parenthesis
the type ie (,[ ect
the amount of the types such that opening = closing, 
the order such that inner paren close before outer closes
*/
const isValid = (str) => {
    let parenStack = []
    for (let i=0; i < str.length; i++){
        if(str[i] === '('  || str[i] === '{' || str[i] === '['){
            parenStack.push(str[i])
        }
        else{
            if(parenStack.length === 0) return false
            let pair = parenStack.pop() + str[i]
            if(pair !== '()' && pair !== '[]' && pair !== '{}' ){
                return false
            }
        }
    }
    return parenStack.length === 0
}
console.log(isValid('[{]'))