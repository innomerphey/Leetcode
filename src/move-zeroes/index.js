/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroCount = 0

    const zeroFree =  nums.filter((v) => {
        if(v === 0 ) {
            zeroCount++
        }

        return v !== 0
    })

    const zeros = new Array(zeroCount).fill(0)

    nums.splice(0, nums.length, ...zeroFree, ...zeros)

};
