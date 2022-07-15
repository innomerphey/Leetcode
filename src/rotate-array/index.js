/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//     let round = null
//     let insertCount = 0
//     let i = 0
//     let replaced = nums[i]
//     let toReplace
//
//
//     while (insertCount !== nums.length) {
//         const toReplaceIndex = (i + k) % nums.length
//
//         toReplace = nums[toReplaceIndex]
//         nums[toReplaceIndex] = replaced
//         replaced = toReplace
//
//         insertCount++
//         i = toReplaceIndex
//         if (i === 0 || insertCount % round === 0) {
//             round = round ?? insertCount
//
//             i++
//             replaced = nums[i]
//         }
//
//     }
//
// };


const rotate = (nums, k) => {

    k = k % nums.length

    nums.unshift(...nums.splice(nums.length - k, k))

};

const nums = [1, 2, 3, 4]

const k = 2

rotate(nums, k)

console.log(nums)


