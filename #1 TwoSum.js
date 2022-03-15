// #1 Two Sum 

// Brute Force 

let nums = [2,7,11,15]

let target = 9

let twoSum = function(nums,target) {
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j]; 
            }
        }
    }
} 

console.log(twoSum(nums,target)); 

// Optimized Approach 
// Hashmap 
nums = [1,5,9]
target = 10; 

function twoSum(nums,target){
   let map = {}; 
    for(let i = 0; i < nums.length; i++){
        let value = nums[i];
        let complement_pair = target - value; 
        if(map[complement_pair] !== undefined){
            return map[complement_pair,i ]; 
        }else {
            map[value] = i; 
        }
    }}
    console.log(twoSum(nums,target))
    


let nums = [2,7,11,15]

let target = 9; 

function twoSum(nums,target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }

    }
}

console.log(twoSum(nums,target)); 



let nums = [2,7,11,15]

let target = 9;

i = 0; 

j = 0

// time complexity of O(N^2)

// space complexity of O(1)


function twoSum(nums, target){

for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
        if(nums[i] + nums[j] == target){
            return [i,j]
        }
    }
}

}

console.log(twoSum(nums,target)); 




let nums = [2,7,11,15]

let target = 9;


function twoSum(nums,target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j] 
            }
        }
    }

}

console.log(twoSum(nums,target)); 

// Brute Force 

// Hash Map

// map = {0:1,1:}

let nums = [2,7,11,15]

let target = 9;

function twoSum(nums,target) { 
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }
    }
};

console.log(twoSum(nums,target)); 

// Optimized 

// Hash Map 

// map = {0:1,1:5,2:9}

// i = 0

// value = 1

// complementaryPair = 10 - 9 = 1

let nums = [1,5,9]

let target = 10


function twoSum(nums,target){
    let map = {};
    for(let i = 0; i < nums.length; i++){
        let value = nums[i];
        let complementPair = target - value; 
        if(map[complementPair] !== undefined){
            return [map[complementPair],i];
        }
        else{
            map[value] = i; 
        }
    }
}

console.log(twoSum(nums,target)); 


let map = {0:1, 1:5, 2: 9}

console.log(map[3])