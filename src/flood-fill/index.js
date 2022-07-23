/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const oldColor = image[sr][sc]

    if (oldColor !== color) {
        dfs(image, sr, sc, oldColor, color)
    }

    return image

};

function dfs(image, r, c, oldColor, color) {
    if (image[r][c] === oldColor) {
        image[r][c] = color

        if (r > 0) {
            dfs(image, r - 1, c, oldColor, color)
        }

        if (c > 0) {
            dfs(image, r, c - 1, oldColor, color)
        }

        if (r + 1 < image.length) {
            dfs(image, r + 1, c, oldColor, color)
        }

        if (c + 1 < image[r].length) {
            dfs(image, r, c + 1, oldColor, color)
        }

    }
}
