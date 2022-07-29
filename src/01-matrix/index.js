/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    const rows = mat.length
    const columns = mat[0].length

    const distances = []
    for (let i = 0; i < rows; i++) {
        distances.push(new Array(columns).fill(Number.MAX_SAFE_INTEGER - 10_000))
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const value = mat[i][j]

            if (value === 0) {
                distances[i][j] = 0
            } else {
                if (j > 0) {
                    distances[i][j] = Math.min(distances[i][j], distances[i][j - 1] + 1)
                }

                if (i > 0) {
                    distances[i][j] = Math.min(distances[i][j], distances[i - 1][j] + 1)
                }
            }
        }
    }

    for (let i = rows - 1; i >= 0; i--) {
        for (let j = columns - 1; j >= 0; j--) {
            const value = mat[i][j]

            if (value === 0) {
                distances[i][j] = 0
            } else {
                if (j < columns - 1) {
                    distances[i][j] = Math.min(distances[i][j], distances[i][j + 1] + 1)
                }

                if (i < rows - 1) {
                    distances[i][j] = Math.min(distances[i][j], distances[i + 1][j] + 1)
                }
            }
        }
    }

    return distances
};
