
// Brute

nums = [1,5,2,6,7];

target = 9; 

function twoSum(nums){
    for(let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }
    }
};


nums = [1,5,2,6,7];

target = 9; 

function getSum(nums){
    for(let i = 0; i<nums.length; i++){
        for(let j= i + 1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }
    }
};

console.log(getSum(nums))


console.log(twoSum(nums))

nums = [1,5,2,6,7];

target = 9; 

function twoSum(nums) {

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++)
        if(nums[i] + nums[j] == target) {
            return [i,j]
        }
    }
}

console.log(twoSum(nums)); 




// Optimized version


let nums = [1,5,9]; 

let target = 10;


function getSum(nums,target){

    let map = {}

    for(let i =0; i < nums.length; i++){

        let value = nums[i]

        let complimentaryPair = target - value

        if(map[complimentaryPair] !== undefined){
            return [map[complimentaryPair],i]
        }
        else{
            map[value] = i
        }
    }
    
}
console.log(getSum(nums,target))

function twoSum(nums,target) {
    let map = {}

    for(let i = 0; i < nums.length; i++ ){

        let value = nums[i];

        let complimentaryPair = target - value; 

        if(map[complimentaryPair] !== undefined){
            return [map[complimentaryPair],i]
        }
        else{

            return -1
        }

    }
}




console.log(twoSum(nums,target));


nums = [1,5,9]; 

target = 10;

function twoSum(nums,target) {
    let map = {}


    for(let i = 0; i < nums.length; i++){

    let value = nums[i]

    let complimentaryPair = target - value;
        if(map[complimentaryPair] !== undefined){
            return [map[complimentaryPair],i]
        }

        else{
            map[value] = i
        }
    }
}

console.log(twoSum(nums,target)); 


nums = [1,5,9]; 

target = 10;

function twoSum(nums, target) {
    let map  = {}; 

    for(let i = 0; i < nums.length; i++){

        let value = nums[i];

        let complimentaryPair = target - value; 

        if(map[complimentaryPair] !== undefined){
            return [map[complimentaryPair],i]
        }
        map[value] = i
    }


}

console.log(twoSum(nums,target))


