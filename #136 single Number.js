//  #136 

// Optimal Solution

let nums = [4,1,2,1,2]

function singleNumber(nums){
    const map = {}; // {1000: 2, 234; 5, 2333 ; 1}

    for(const num of nums ){
        map[num] = map[num] + 1 || 1; 
    }
    for(const key in map){
        if(map[key] === 1){
            return key; 
        }
    }
}
console.log(singleNumber(nums)); 






