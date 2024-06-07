// Challenges/arrayMap.js

/**
 * This function checks if there is a part of the array that adds up to the target number.
 * @param {number[]} arr - The input array of numbers.
 * @param {number} target - The target sum we are looking for.
 * @returns {boolean} 
 */
function subarraySum(arr, target) {
    let currentSum = 0;
    let start = 0; 
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end]; 

       
        while (currentSum > target && start <= end) {
            currentSum -= arr[start]; 
            start++; 
        }

     
        if (currentSum === target) {
            return true;
        }
    }


    return false;
}


const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(subarraySum(arr, target)); 
