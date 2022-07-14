/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

    nums.sort((a , b) => {
        return Math.abs(a) - Math.abs(b)
    })

    return nums.map((el) => el**2 )

};
