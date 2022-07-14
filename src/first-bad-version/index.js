var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        const badVersions = []
        let start = 0;
        let end = n - 1;
        let mid = 0;

        while (end >= start) {
            mid = Math.floor((end - start) / 2) + start
            const version = getVersion(mid)

            if (isBadVersion(version)) {
                end = mid - 1
                badVersions.push(mid)
                continue
            }

            start = mid + 1
        }

        if (isBadVersion(getVersion(start))) {
            badVersions.push(start)
        }

        return  getVersion(Math.min(...badVersions));


    };
};

function getVersion(index) {
    return index + 1;
}

const n = 4
const badVersion = 1;


function isBadVersion(version) {
    return version >= badVersion
}

console.log(solution(isBadVersion)(n))
