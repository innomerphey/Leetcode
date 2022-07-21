/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const charCounts = new Map()

    for (let char of s1) {
        const count = charCounts.get(char) ?? 0
        charCounts.set(char, count + 1)
    }


    const permutation = new Map()
    let start = 0
    let end = 0

    while (end < s2.length && start < s2.length) {
        const char = s2[end]

        if (!charCounts.has(char)) {
            end++
            start = end
            permutation.clear()
            continue
        }

        const positions = permutation.get(char) ?? []
        positions.push(end)
        permutation.set(char, positions)

        if (positions.length > charCounts.get(char)) {
            const firstPosition = positions[0]
            start = firstPosition + 1

            for (let [ch, positionsArray] of permutation.entries()) {
                const cutPositions = positionsArray.filter(position => position > firstPosition)
                permutation.set(ch, cutPositions)
            }

        }

        const permutationLength = Array.from(permutation.values())
            .reduce((length, positions) => {
                return length + positions.length
            }, 0)


        if (permutationLength === s1.length) {
            return true
        }

        end++
    }

    return false

}
