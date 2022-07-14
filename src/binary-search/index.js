/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    let subStart = 0

    function binarySearch(sub) {
        if (sub.length === 0) {
            return -1
        }

        if (sub.length === 1) {
            return sub[0] === target ? subStart : -1;
        }

        const mid = Math.floor(sub.length / 2)

        if (target < sub[mid]) {
            return binarySearch(sub.slice(0, mid), target)
        } else if (target > sub[mid]) {
            subStart += mid + 1
            return binarySearch(sub.slice(mid + 1), target)
        } else {
            return subStart + mid
        }
    }

    return binarySearch(nums)

};

console.log(search([-1, 0,3],
    -1));


