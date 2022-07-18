/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0
    let j = s.length - 1
    let buff

    while(i < j) {
        buff = s[i]
        s[i] = s[j]
        s[j] = buff

        i++
        j--
    }
};
