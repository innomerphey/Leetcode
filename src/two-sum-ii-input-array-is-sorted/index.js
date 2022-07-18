var twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        const second = target - numbers[i]

        const found = binarySearch(second, numbers, i)

        if (found !== -1) {
            return [i + 1, found + 1]
        }

    }
};


function binarySearch(target, nums, start = 0, end = nums.length - 1) {
    let left = start
    let right = end
    let mid;

    while (right >= left) {
        mid = left + Math.floor((right - left) / 2)

        if (target < nums[mid]) {
            right = mid - 1
        } else if (target > nums[mid]) {
            left = mid + 1
        } else if (target === nums[mid]) {
            return mid
        }
    }
    return -1
}

// console.log(binarySearch(1, [1,2,3,4,4,9,56,90]));

console.log(twoSum([1,2,3,4,4,9,56,90], 8))

