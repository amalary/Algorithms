// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

function isPalindrome(num) {

    if( num < 0){
        return false;   
    }
        let reverse = 0; 
        for(let i = num; i >= 1; i = Math.floor(i/10)) 
        reverse = reverse *10 + i %10;

        return reverse == num

    }
    console.log(isPalindrome(121)); 

// 1 

function isPalindrome(nums) {
    if(nums < 0){
        return false;
    }

    let reverse = 0; 

    for(let i = nums; i >= 1; i = Math.floor(i/10)) { 
        reverse = reverse * 10 + i%10; 
    }
    return reverse == nums
}

console.log(isPalindrome(232)); 

// 2 

function isPalindrome(nums) { 
    if(nums < 0){
        return false;
    }

    let reverse =0 ; 

    for(let i = nums; i >= 1; i = Math.floor(i/10)){
        reverse = reverse * 10 + i%10
    }
    return reverse == nums
}

console.log(isPalindrome(444));

// 4

function isPalindrome(nums) {

    if(nums < 0){
        return false;
    }

    let reverse = 0; 

    for(let i = nums; i >= 1; i = Math.floor(i/10)){
        reverse = reverse * 10 + i%10
    }
    return reverse == nums
}

console.log(isPalindrome(454)); 

// 5

function isPalindrome(nums) {
    if(nums < 0){
        return false;
    }

    let reverse = 0; 

    for(let i = nums; i >= 1; i = Math.floor(i/10)){

        reverse = reverse * 10  + i%10 
    }
    return reverse == nums
}

console.log(666); 

// 6

function isPalindrome(nums) { 

    if(nums < 0) {
        return false; 
    }

    let reverse = 0; 

    for(let i = nums; i >=1; i = Math.floor(i/10)) {

        reverse = reverse * 10 + i%10
    }
    return reverse == nums
}

console.log(isPalindrome(777)); 

// 7 

function isPalindrome(nums) { 
    if(nums < 0) { 
        return false;
    }

    let reverse = 0; 

    for(let i = nums; i >=1; i = Math.floor(i/10)){

        reverse = reverse * 10 + i%10
    }
    return reverse == nums
}


console.log(isPalindrome(888));

// 8 

function isPalindrome(nums) {

    if(nums < 0) {
        return false;
    }

    let reverse = 0; 
                                    
    for(let i = nums; i >=1; i = Math.floor(i/10)) {

        reverse = reverse * 10 + i%10
    };

    return reverse == nums
}

console.log(isPalindrome(444)); 

//  9 

function isPalidrome(nums) { 
    if( nums < 0){
        return false;
    }

    let reverse = 0; 

    for(let i = nums; i >= 1; i = Math.floor(i/10)){

        reverse = reverse * 10 + i%10;

    }
    return reverse == nums; 
}

console.log(isPalidrome(000))

// 10 

function isPalindrome(nums) { 

    if(nums < 0) {
        return false; 
    }

    let reverse = 0; 

    for( i = nums; i >= 1; i = Math.floor(i/10)){
        console.log( Math.floor(i/10))
        reverse = reverse * 10 + i%10;
    }
    return reverse == nums
}

console.log(isPalindrome(1221)); 

console.log(Math.floor(121/10)) 

console.log(12%10)






