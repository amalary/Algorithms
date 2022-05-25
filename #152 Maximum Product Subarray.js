// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, 
// and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
// A subarray is a contiguous subsequence of the array.

let nums = [2,3,-2,4]; 


function maxProduct(nums){

    let maxTillIndex = [nums[0]];
    let minTillIndex = [nums[0]];
    let max = nums[0];

    for(let i = 1 ; i < nums.length; i++){

        const num = nums[i]

        maxTillIndex[i] = Math.max(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);
        minTillIndex[i] = Math.min(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);

        max = Math.max(max,maxTillIndex[i])
    }
    return max
}

console.log(maxProduct(nums)) 


// 1

nums = [2,3,-2,4];

function maxProduct(nums){

    let maxTillIndex = [nums[0]];
    let minTillIndex = [nums[0]];
    let max = nums[0];

    for(let i = 1; i < nums.length; i++){
        const num = nums[i]; 

        maxTillIndex[i] = Math.max(num,num * maxTillIndex[i -1], num * minTillIndex[i -1])
        minTillIndex[i] = Math.min(num,num * maxTillIndex[i -1], num * minTillIndex[i -1])

        max = Math.max(max,maxTillIndex[i])


    }
    return max
}

console.log(maxProduct(nums));


// 2


nums = [2,3,-2,4];

function maxProduct(nums) {
    let maxTillIndex = [nums[0]];
    let minTillIndex = [nums[0]];
    let max = nums[0]

    for(let i = 1; i < nums.length; i++) {

        let num = nums[i]

        maxTillIndex[i] = Math.max(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);

        minTillIndex[i] = Math.min(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]); 

        max = Math.max(max, maxTillIndex[i])
    }
    return max
}

console.log(maxProduct(nums))

// 3


nums = [2,3,-2,4];

function maxProduct(nums) {

    let maxTillIndex = [nums[0]];
    let minTillIndex = [nums[0]];
    let max = nums[0]; 

    for(let i = 1; i < nums.length; i++){

        let num = nums[i]

        maxTillIndex[i] = Math.max(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);
        minTillIndex[i] = Math.min(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);

        max = Math.max(max,maxTillIndex[i])
    }
    return max
}

console.log(maxProduct(nums))

// 4


nums = [2,3,-2,4];

function maxProduct(nums) { 

    let maxTillIndex = [nums[0]]
    let minTillIndex = [nums[0]];
    let max = nums[0]; 

    for(let i = 1; i < nums.length; i++) {

        let num = nums[i]

        maxTillIndex[i] = Math.max(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]); 
        minTillIndex[i] = Math.min(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);

        max = Math.max(max, maxTillIndex[i])
    }
    return max
}

console.log(maxProduct(nums));

// 5


nums = [2,3,-2,4];

function maxProduct(nums) { 

    let maxTillIndex = [nums[0]]; 

    let minTillIndex = [nums[0]]; 

    let max = nums[0];

    for(let i = 1; i < nums.length; i++) {

        let num = nums[i];

        maxTillIndex[i] = Math.max(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);
        minTillIndex[i] = Math.min(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);

        max = Math.max(max,maxTillIndex[i])
    }
    return max
}

console.log(maxProduct(nums));

// 6 

nums = [2,3,-2,4];

function maxProduct(nums){

    let maxTillIndex = [nums[0]];
    let minTillIndex = [nums[0]]; 
    let max = nums[0]; 

    for(let i = 1; i < nums.length; i++) {

        let num = nums[i]; 

        maxTillIndex[i] = Math.max(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);
        minTillIndex[i] = Math.min(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);

        max = Math.max(max,maxTillIndex[i]); 
    }
    return max
}

console.log(maxProduct(nums));

// 7 

nums = [2,3,-2,4];

function maxProduct(nums) {

    let maxTillIndex = [nums[0]];
    let minTillIndex = [nums[0]];

    let max = nums[0]; 

    for(let i = 1; i < nums.length; i++){

        let num = nums[i];

        maxTillIndex[i] = Math.max(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);
        minTillIndex[i] = Math.min(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);

        max = Math.max(max,maxTillIndex[i]);

    }
    return max
}

console.log(maxProduct(nums)); 

// 8 

nums = [2,3,-2,4];

function maxProduct(nums){ 

    let maxTillIndex = [nums[0]];
    let minTillIndex = [nums[0]];

    let max = nums[0]; 

    for(let i = 1; i < nums.length; i++) {

        let num = nums[i]; 

        maxTillIndex[i] = Math.max(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);
        minTillIndex[i] = Math.min(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]); 

        max = Math.max(max, maxTillIndex[i])
    }
    return max
}

console.log(maxProduct(nums))

// 9

nums = [2,3,-2,4];

function maxProduct(nums){

    let maxTillIndex = [nums[0]];

    let minTillIndex = [nums[0]];

    let max = nums[0]; 

    for(let i = 1; i < nums.length; i++){

        let num = nums[i];

        maxTillIndex[i] = Math.max(num, num * maxTillIndex[i -1 ], num * minTillIndex[i - 1]); 
        minTillIndex[i] = Math.min(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]); 

        max = Math.max(max, maxTillIndex[i]); 

    }
    return max
};

console.log(maxProduct(nums)); 

// 10 

nums = [2,3,-2,4];

function maxProduct(nums) {

    let maxTillIndex = [nums[0]];
    let minTillIndex = [nums[0]];

    let max = nums[0]; 

    for(let i = 1; i < nums.length; i++) {

        let num = nums[i]; 

        maxTillIndex[i] = Math.max(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);
        minTillIndex[i] = Math.min(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);

        max = Math.max(max, maxTillIndex[i]);

    }
    return max
}

console.log(maxProduct(nums));



