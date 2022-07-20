var lengthOfLongestSubstring = function (s) {
    if (s.length === 1) {
        return 1
    }


    let start = 0
    let end = 0
    let length = 0
    let maxLength = 0

    while (start < s.length && end < s.length) {

        const repeat = indexOf(s, s[end], start, end)

        if (repeat >= 0) {
            start = repeat + 1
            maxLength = Math.max(maxLength, length)
            length = end - start + 1
        } else {
            length++
        }

        end++
    }

    return Math.max(maxLength, length)
};


function indexOf(s, char, start, end) {
    for (let i = start; i < end; i++) {
        if (s[i] === char) {
            return i
        }
    }

    return -1
}

console.log(lengthOfLongestSubstring("aa"));
