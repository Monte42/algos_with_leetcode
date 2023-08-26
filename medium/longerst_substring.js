const lengthOfLongestSubstring = s => {
    let substring = ''
    let max = 0
    let counter = 0
    for (i=0; i<s.length; i++){
        if (substring.includes(s[i])) {
            s = s.slice(s.indexOf(s[i])+1);
            substring = ''
            counter = 0
            i = -1
        } else {
            substring += s[i]
            counter++ 
        }
        max = Math.max(max,counter)
    }
    return max
}

// console.log(lengthOfLongestSubstring('dvdf'));  // 3
// console.log(lengthOfLongestSubstring('abcabcbb')); // 3
// console.log(lengthOfLongestSubstring('bbbbb'));  // 1
// console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('pwwkewmlokytrt')); // 9
// console.log(lengthOfLongestSubstring('aab')); //2
