//defining the function

function addNums(a,b) {
    let c=a+b;
    console.log(c);
}

// calling the function
addNums(4,5);


const checkEven = function(n){
    if(n%2===0){
        console.lof('even');
        
    }else{
        console.log('odd');
    }

}
checkEven(835);


//arrow function

const checkPrime = (n) => {
    let prime= true;

    for(let i=2; i<n; i++){
        if(n%i===0){
            console.log('not prime');
            prime = false;
            break;

        }
    }
}

checkPrime(97);