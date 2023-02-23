var isIsomorphic = function(s, t) {
    // check for even string lengths
    if (s.length !== t.length) return false
    // create maps for each string
    let sMap = {}
    let tMap = {}
    // loop through both strings - 1 loop / strings same length at this point
    for (let i=0;i<s.length;i++){
        if (sMap[s.charAt(i)] !== tMap[t.charAt(i)]) return false
        sMap[s.charAt(i)] = i
        tMap[t.charAt(i)] = i
    }

    return true
}
// console.log(isIsomorphic('egg', 'add'))
// console.log(isIsomorphic('foo', 'bar'))
// console.log(isIsomorphic('oof', 'baa'))
// console.log(isIsomorphic('oof', 'baae'))
// console.log(isIsomorphic('paper', 'title'))
// console.log(isIsomorphic('bbbaaaba', 'aaabbbba'))



var isSubsequence = function(s, t) {
    if(s.length===0) return true
    for (let i=0; i<t.length;i++){
        if (t[i] === s[0]) s = s.substring(1)
        if (s.length===0) return true
    }
    return false
};

console.log(isSubsequence('ace', 'ahbghc'));
console.log(isSubsequence('ace', 'ahcldje'));