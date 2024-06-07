const prompt = require('prompt-sync')();

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

const input = prompt('Enter a list of numbers separated by commas (e.g., 4,2,7,1,9,5): ');
const target = parseInt(prompt('Enter the target sum: '), 10);

const arr = input.split(',').map(Number);

const result = subarraySum(arr, target);

console.log(result ? 'True' : 'False');
