// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const { fileURLToPath } = require("url");



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
            return true
        }
    }
    return false 
}

console.log(containsDuplicate(nums))








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

let nums = [1,2,3,1];

function containsDuplicate(nums){

    let memory = {}; 

    for(let i = 0; i < nums.length; i++){

        if(memory[nums[i]] == undefined){ 
            memory[nums[i]] = nums[i]
        }
        else{
            return true
        }
    }; 
    return false
}

console.log(containsDuplicate(nums)); 

let nums = [1,2,3,1];

function containsDuplicate(nums){

    let memory = {}; 

    for(let i = 0; i < nums.length; i++){
        if(memory[nums[i] == undefined]){
            memory[nums[i]] = nums[i]
        }
        else{
            return true
        }
    }
    return false
}

console.log(containsDuplicate(nums)); 

// 1

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

// 2 

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

console.log(containsDuplicate(nums))

// 3 

let nums = [1,2,3,1];

function containsDuplicate(nums) { 
    let memory = {}; 

    for(let i = 0; i < nums.length; i++){
        if(memory[nums[i]] == undefined){
            memory[nums[i]] = nums[i]
        }
        else{
            return true
        }
    }
    return false; 
}

console.log(containsDuplicate(nums)); 

// 4 

let nums = [1,2,3,1];

function containsDuplicate(nums){

    let memory = {}; 

    for(let i = 0; i < nums.length; i++){
        if(memory[nums[i]] == undefined){
            memory[nums[i]] = nums[i]
        }
        else{

        return true
        }
    }
    return false; 
};

console.log(containsDuplicate(nums)); 

// 5 

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
    return false
}

console.log(containsDuplicate(nums)); 

//  6

let nums = [1,2,3,1];

function containsDulicate(nums){

    let memory = {}; 

    for(let i = 0; i < nums.length; i++) {
        if(memory[nums[i]] == undefined) {
            memory[nums[i]] = nums[i]
        }
        else{
            return true ; 
        }
    }
    return false;
}

console.log(containsDulicate(nums)); 

//  7 

let nums = [1,2,3,1];

function containsDuplicate(nums){

    let memory = {}; 

    for(let i = 0; i < nums.length; i++) {
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

// 8 

let nums = [1,2,3,1];

function containsDuplicate(nums) {

    let memory = {}; 

    for(let i = 0; i < nums.length; i++) {
        if(memory[nums[i]] == undefined) {
            memory[nums[i]] = nums[i]
        }
        else{
            return true; 
        }
    }
    return false;
}

console.log(containsDuplicate(nums)); 

// 9 

let nums = [1,2,3,1];

function containsDuplicate(nums) {

    let memory = {}; 

    for(let i = 0; i < nums.length; i++) {
        if(memory[nums[i]] == undefined) {
            memory[nums[i]] = nums[i]
        }
        else{
            return true; 
        }
    }
    return false; 
}

console.log(containsDuplicate(nums)); 

// 10 

let nums = [1,2,3,1];

function containsDuplicate(nums){

    let memory = {};

    for(let i = 0; i < nums.length; i++) {
        if(memory[nums[i]] == undefined) {
            memory[nums[i]] = nums[i];
        }
        else{
            return true
        }
    }
    return false

}

console.log(containsDuplicate(nums));


// Optimized Version 

// example 

let nums = [1,2,3,1];

function containsDuplicate(nums){ 

    nums.sort((a,b) => {return b - a}); 
    for(let i = 0; i < nums.length; i++){

        if(i > 0 && nums[i -1] === nums[i]) return true;
    }
    return false
}

console.log(containsDuplicate(nums));

// 1

let nums = [1,2,3,1];

function containsDuplicate(nums) {

    nums.sort((a,b) => {return b - a});

    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i -1] == nums[i]){
            return true
        }
    }
    return false
}

console.log(containsDuplicate(nums)); 

// 2 

let nums = [1,2,3,1]; 

function containsDuplicate(nums) {

    nums.sort((a,b) => {return b - a}); 

    for(let i = 0; i < nums.length; i++) {
        if( i > 0 && nums[i -1] == nums[i]){
            return true
        }
    }
    return false
}

console.log(containsDuplicate(nums)); 


// 3 

let nums = [1,2,3,1];

function containsDuplicate(nums) {

    nums.sort((a,b) => {return b-a}); 

    for(let i = 0; i < nums.length; i++) {
        if( i > 0 && nums[i - 1] == nums[i]){
            return true;
        }
    }
    return false;
}

console.log(containsDuplicate(nums));

// 4 

let nums = [1,2,3,1];

function containsDuplicate(nums) { 

    nums.sort((a,b) => {return b-a}); 

    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i - 1] == nums[i]){
            return true;
        };
    };
    return false; 
};

console.log(containsDuplicate(nums))

// 5 

let nums = [1,2,3,1];

function containsDuplicate(nums) {

    nums.sort((a,b) => {return b-a}); 

    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i -1] == nums[i]){
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate(nums))

// 6 

let nums = [1,2,3,1];

function containsDuplicate(nums) { 

    nums.sort((a,b) => {return b - a}); 

    for(let i = 0; i < nums.length; i++) {
        if( i > 0 && nums[i-1] == nums[i]) {
            return true; 
        }
    }
    return false;
}

console.log(containsDuplicate(nums));

//  7 

let nums = [1,2,3,1];

function containsDuplicate(nums){

    nums.sort((a,b) => {return b-a}); 

    for(let i = 0; i < nums.length; i++) {

        if(i > 0 && nums[ i -1] == nums[i]){
            return true;
        }
    }
    return false
}; 

console.log(containsDuplicate(nums))

//  8 

let nums = [1,2,3,1];

function containsDuplicate(nums) {

    nums.sort((a,b) => {return b-a}); 

    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i - 1] == nums[i]){
            return true;
        }
    }
    return false;
}

console.log(containsDuplicate(nums));

//  9 

let nums = [1,2,3,1];

function containsDuplicate(nums) {

    nums.sort((a,b) => {return b-a}); 

    for(let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i - 1] == nums[i]) { 
            return true; 
        }
    }
    return false; 


}

console.log(containsDuplicate(nums))

// 10 

let nums = [1,2,3,1];

function containsDuplicate(nums) { 
    nums.sort((a,b) => {return b-a }); 

    for(let i = 0; i < nums.length; i++) {
        if( i > 0 && nums[i - 1] == nums[i]){
            return true;
        }
    }
    return false; 
}

console.log(containsDuplicate(nums)); 


let nums = [1,2,3,1];


console.log(nums[nums.length -1])

// 7

nums = [1,2,3,4];

function productExceptSelf(nums) {

    const left = new Array(nums.length).fill(0)

    left[0] = 1;

    const right = new Array(nums.length).fill(0); 

    right[right.length-1] = 1; 

    for(let i = 1; i < nums.length; i++) {
        
        left[i] = nums[i - 1] * left[i - 1];
    }

    for(let i = right.length-2; i >=0; i--){

        right[i] = nums[i + 1] * right[i + 1];
    }

    for(let i =0; i < nums.length; i++){

        nums[i] = left[i] * right[i]
    }
    return nums
}

console.log(productExceptSelf(nums)); 

nums = [1,2,3,4];

function productExceptSelf(nums){

    const left = new Array(nums.length).fill(0);

    left[0] = 1

    const right = new Array(nums.length).fill(0);

    right[right.length-1] = 1; 

    for(let i = 1; i < nums.length; i++){

        left[i] = nums[i - 1] * left[i - 1]
    }

    for(let i = right.length-2; i>= 0; i--){

        right[i] = nums[i + 1] * right[i + 1]; 
    }

    for(let i = 0; i = nums.length; i ++){ 

        nums[i] = left[i] * right[i]
    } 
    return nums
}

console.log(productExceptSelf(nums))

let nums = [1,2,3,4];


function productExceptSelf(nums) {

    const left = new Array(nums.length).fill(0); 

    left[0] = 1; 

    const right = new Array(nums.length).fill(0); 

    right[nums.length-1]= 1;

    for(let i = 1; i < nums.length; i++){

        left[i] = nums[i - 1] * left[i -1];
    }

    for(let i = right.length - 2; i >= 0; i--){

        right[i] = nums[i + 1] * right[i + 1]; 

    }

    for(let i = 0; i < nums.length; i ++){

        nums[i] = left[i] * right[i]
    }
    return nums
}

console.log(productExceptSelf(nums))
