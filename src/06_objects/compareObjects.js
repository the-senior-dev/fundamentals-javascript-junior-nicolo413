/**
 * Write a function that makes a deep comparison between two objects.
 * Deep Comparison: two values are only considered equal if they are the same value or are objects with the same 
 * properties whose values are also equal when compared with a recursive call to deepEqual.
 * @param {*} obj1 
 * @param {*} obj2 
 */
function compareObjects(obj1, obj2) {
    if (!obj1 || !obj2) {
        return false; // If either is null or undefined, compare directly
    }
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return obj1 === obj2; // If not objects or one is null, compare directly    
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false; // Different number of keys means objects are not equal
    }
    for (const key of keys1) {
        if (!keys2.includes(key) || !compareObjects(obj1[key], obj2[key])) {
            return false; // Key not found in second object or values are not equal
        }
        compareObjects(obj1[key], obj2[key]); // Recursive call to compare nested objects
    }
    return true; // All keys and values are equal
}
  
module.exports = compareObjects;
  