// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// Brute Force 

let nums = [1,2,3,1];

function containsDuplicate(nums){

    // create memory 
    let memory = {}; 

    for(let i = 0; i < nums.length; i++){

        if(memory[nums[i] == undefined]){
            memory[nums[i]] = nums[i]
        }
        else{
            return true 
        }

    }
    return false; 
}; 

let nums = [1,2,3,1];

function containsDuplicate(nums){

    let memory = {};

    for(let i = 0; i < nums.length; i++){

        if(memory[nums[i]] == undefined){
            memory[nums[i]] = nums[i];
        }
        else{
            return true; 
        }
    }
    return false; 
}

console.log(containsDuplicate(nums)); 

let nums = [1,2,3,1];

function containsDuplicate(nums){

    let memory = {}; 

    for(let i = 0; i <nums.length; i++){

        if(memory[nums[i]] == undefined){
            memory[nums[i]] = nums[i]
        }
        else{
            return true; 
        }
    }
    return false; 
}

console.log(containsDuplicate(nums)); 

let nums = [1,2,3,1];

function containsDuplicate(nums){
    let memory = {}

    for(let i = 0; i <nums.length; i++){

        if(memory[nums[i]] == undefined){
            memory[nums[i]] = nums[i]; 
        }
        else{
            return true;
        }
    }
    return false
}; 

console.log(containsDuplicate(nums)); 

let nums = [1,2,3,1];

function containsDuplicate(nums){ 
 let memory = {}; 

 for(let i = 0; i < nums.length; i++){ 
    if(memory[nums[i]] == undefined){
        memory[nums[i]] = nums[i]
    }
    else{
        return true; 
    }
    
 }
 return false

}

console.log(containsDuplicate(nums)); 








console.log(containsDuplicate(nums));

// Optimized Version 

// sort input array  (O NlogN)

let nums = [1,2,3,1];

function containsDuplicate(nums){ 

    nums.sort((a,b) => {return b - a}); 
    for(let i = 0; i < nums.length; i++){

        if(i > 0 && nums[i -1] === nums[i]) return true;
    }
    return false
}

console.log(containsDuplicate(nums));

