var reverseWords = function (s) {

    return s
        .split(" ")
        .reduce((reversedArr, word) => {
            const reversedWord = word.split("").reverse().join("")

            reversedArr.push(reversedWord)

            return reversedArr
        }, [])
        .join(" ")

};
