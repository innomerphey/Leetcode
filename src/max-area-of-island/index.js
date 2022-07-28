var maxAreaOfIsland = function (grid) {
    let maxArea = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const color = grid[i][j]

            if (color === 0 || color === 2) {
                continue
            }

            const area = getArea(grid, i, j, 2)
            maxArea = Math.max(area, maxArea)
        }
    }

    return maxArea
};

function getArea(grid, r, c, newColor) {
    let area = 0

    function dfs(matrix, i, j, visitedColor) {
        const color = matrix[i][j]
        if (color === 1) {
            matrix[i][j] = visitedColor
            area++

            if (i >= 1) {
                dfs(matrix, i - 1, j, visitedColor)
            }

            if (j >= 1) {
                dfs(matrix, i, j - 1, visitedColor)
            }

            if (i + 1 < matrix.length) {
                dfs(matrix, i + 1, j, visitedColor)
            }

            if (j + 1 < matrix[i].length) {
                dfs(matrix, i, j + 1, visitedColor)
            }
        }
    }

    dfs(grid, r, c, newColor)

    return area
}

// const grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
const grid = [[0, 1], [1, 1]]

console.log(maxAreaOfIsland(grid));
