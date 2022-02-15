// #1 Two Sum 

// Brute Force 

let nums = [2,7,,11,15]

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
map = {0: 1, 1: 5, 2: 9}
i = 2; 
value = 9;
let complement_pair = 10 - 9 == 1;  
[0,2];
map[1]; 

function twoSum(nums,target){
    map = {}; 
    for(let i = 0; i < nums.length; i++){
        let value = nums[i];
        let complement_pair = target - value; 
        if(map[complement_pair] !== undefined){
            return [map[complement_pair,i ]]; 
        }else {
            map[value] = i; 
        }
    }}
    console.log(twoSum(nums,target))
    
