const longestCommonPrefix = arr => {
    arr.sort((a,b) => {return a.length - b.length})
    prefix = ""
    for (i=0;i<arr[0].length;i++) {
        current_value = arr[0][i]
        for (j=1;j<arr.length;j++){
            if (current_value != arr[j][i]){
                return prefix
            }
        }
        prefix += current_value
    }
    return prefix
}

console.log(longestCommonPrefix(["dog","racecar","car"]))