// Given an integer array nums, find the contiguous subarray 
// (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array. 


nums = [-2,1,-3,4,-1,2,1,-5,4]; 

function maxSubarray(nums) {

    let solution = nums[0]; 

    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i -1])
        solution = Math.max(solution,nums[i])
    }
    return solution
}

console.log(maxSubarray(nums)); 

//  1
 nums = [-2,1,-3,4,-1,2,1,-5,4]

function maxSubarray(nums) {

    let solution = nums[0]; 

    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i -1 ])
        solution = Math.max(solution,nums[i])
    }
    return solution
}

console.log(maxSubarray(nums)); 


//  2

 nums = [-2,1,-3,4,-1,2,1,-5,4]; 

function maxSubarray(nums) { 
    let solution = nums[0];

    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i -1]); 
        solution = Math.max(solution,nums[i])
    }
    return solution;
}

console.log(maxSubarray(nums)); 

//  3 

 nums = [-2,1,-3,4,-1,2,1,-5,4]; 

function maxSubarray(nums) { 
    let solution = nums[0]; 

    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i -1]); 
        solution = Math.max(solution,nums[i])
    }
    return solution
}

console.log(maxSubarray(nums)); 


// 4 

 nums = [-2,1,-3,4,-1,2,1,-5,4]; 

function maxSubarray(nums) { 
    let solution = nums[0]; 

    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        solution = Math.max(solution,nums[i]);

    }
    return solution
}

console.log(maxSubarray(nums));

//  5

 nums = [-2,1,-3,4,-1,2,1,-5,4]; 

function maxSubarray(nums) {
    let solution = nums[0]; 

    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i]+ nums[i -1])
        solution = Math.max(solution, nums[i]); 
    }
    return solution
}; 

console.log(maxSubarray(nums)); 

//  6 

 nums = [-2,1,-3,4,-1,2,1,-5,4]; 

function maxSubarray(nums) {
    let solution = nums[0]; 

    for(let i = 1; i < nums.length; i++) {

        nums[i] = Math.max(nums[i], nums[i] + nums[i -1])
        solution = Math.max(solution,nums[i]); 
    }
    return solution; 
}

console.log(maxSubarray(nums)); 

//  7 

nums = [-2,1,-3,4,-1,2,1,-5,4]; 

function maxSubarray(nums){

    let solution = nums[0]; 

    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i -1]);
        solution = Math.max(nums[i], solution)
    }
    return solution
}

console.log(maxSubarray(nums)); 

// 8 

 nums = [-2,1,-3,4,-1,2,1,-5,4]; 

function maxSubarray(nums) {
    let solution = nums[0]; 

    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i -1]); 
        solution = Math.max(solution,nums[i])
    }
    return solution
}; 

console.log(maxSubarray(nums))

//  9 

 nums = [-2,1,-3,4,-1,2,1,-5,4]; 

function maxSubarray(nums) {
    let solution = nums[0]; 

    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i -1 ]); 
        solution = Math.max(nums[i], solution);
    }
    return solution
}

console.log(maxSubarray(nums)); 

// 10 

nums = [-2,1,-3,4,-1,2,1,-5,4]; 

function maxSubarray(nums) { 

    let solution = nums[0]; 

    for(let i = 1; i < nums.length; i++){

        nums[i] = Math.max(nums[i], nums[i] + nums[i -1]); 
        solution = Math.max(nums[i], solution)
    }
    return solution
}

console.log(maxSubarray(nums)); 


nums = [-2,1,-3,4,-1,2,1,-5,4]

function maxSubarray(nums){

    let solution =nums[0]; 

    for(let i = 1; i < nums.length; i++) {

        nums[i] = Math.max(nums[i], nums[i] + nums[i -1])
        solution = Math.max(solution,nums[i])
    }
    return solution
}

console.log(maxSubarray(nums))






