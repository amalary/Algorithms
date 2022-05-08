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

    




    console.log(Math.floor(121/10)); 

    console.log(0.1%10)
 


console.log(0.1*10)

    let num = 121

let i = Math.floor(num/10)

let j = i%10



console.log(j)

    console.log(12%10)



