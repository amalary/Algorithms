// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.
// You can return the answer in any order.


// INPUTS: nums, target;

//OUTPUTS: number[];

// Brute Force approach 

let nums = [2,7,11,15];

let target = 9;

function twoSum(nums,target) {

    for(let i = 0; i < nums.length; i++){
        for(let j = i +1; j < nums.length; j++){

            if(nums[i] + nums[j] == target){

                return [i,j]
            }
        } 
    }
}
console.log(twoSum(nums,target));




nums = [2,7,11,15];

target = 9;

function twoSum(nums,target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }
    }
}

console.log(twoSum(nums,target))


// Optimized Approach 

nums = [1,5,9];

target = 10;

function twoSum(nums,target){

    let map = {};
    for(let i = 0; i <nums.length; i++){
        let value = nums[i]
        complementaryPair = target - value;
        if(map[complementaryPair] !== undefined){
            return [map[complementaryPair],i]

        }
        else{
            map[value] = i
        }
    }
}
console.log(twoSum(nums,target));


nums = [1,5,9];

target = 10;

function twoSum(nums,target){

    let map = {}

    for(let i = 0; i < nums.length; i++){
        let value = nums[i]
        let complementaryPair = target - value;
        if(map[complementaryPair] !== undefined){
            return [map[complementaryPair],i]
        }
        else{
            map[value] = i
        }
    }
}

console.log(twoSum(nums,target));


let map = {1:0, 5:1, 9:2}

map[4] = 44;

map['zip'] = 02453

console.log(map)


let map2 = {'num1':0}

map2['num1'] = 2



console.log(map2['num1'])







