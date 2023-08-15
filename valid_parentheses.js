const validPars = str => {
    tempStr = ""
    parenthesesPairs = {
        '(':')',
        '[':']',
        '{':'}'
    }
    for (i=0;i<str.length;i++) {
        if (str[i] == '(' || str[i] == '[' || str[i] == '{' ) {
            tempStr += str[i]
        } else if (str[i] == ')' || str[i] == ']' || str[i] == '}' ) {
            if (tempStr[tempStr.length-1]===Object.keys(parenthesesPairs).find(key => parenthesesPairs[key] === str[i])) {
                tempStr = tempStr.slice(0,-1)
            } else {
                return false
            }
        }
    }
    if (tempStr.length > 0) return false 
    return true
}

console.log(validPars('{}[{[((([]{[{}()]})))]}]({)'))
console.log(validPars('{}[{[((([]{[{}()]})))]}](([{[]()}]))'))
console.log(validPars('[[1,2,3],("a","s","d"),{"a":[4,5,6],"b":{"g":"fff", "h":[0,0,9]}}]'))
console.log(validPars('[[1,2,3],("a","s","d"),{"a":[4,5,6],"b":"g":"fff", "h":[0,0,9]}}]'))