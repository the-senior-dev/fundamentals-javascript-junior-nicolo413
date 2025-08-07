/**
 * Returns a new array with the elements in reverse order
 * @example
 * reverseArray([1, 2, 3]) // => [3, 2, 1]
 * @param {Array} arr
 * @returns {Array}
 */
function reverseArray(arr) {
    const reversed = [];
    for (let i = 0; i < arr.length / 2; i++) {
        reversed[i] = arr[arr.length - 1 - i];
        reversed[arr.length - 1 - i] = arr[i];
    }

    if (arr.length % 2 !== 0) {
        reversed[Math.floor(arr.length / 2)] = arr[Math.floor(arr.length / 2)];
    }

    return reversed;
}

module.exports = reverseArray;