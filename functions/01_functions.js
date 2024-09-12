// function function_name(parameters){
//     statements
// }

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a user name");
        
    }
    return `${username} just logged in`
}

const answer=loginUserMessage("sanika")
loginUserMessage()
console.log(answer);


function calculate(...nums){ //... operator return a array when n number are passed
    return nums
}

console.log(calculate(200,400,500)) //[ 200, 400, 500 ]

function calculate2(val1,val2,...nums){
    return nums
}

console.log(calculate2(200,400,500)) //[500]

const user={
    username:"sanik",
    price:199
}

// arrow function 

// function chai(){
//     let username="hitesh"
//     console.log(this); //undefined   
// }

// const chai=function(){
//     let username="hitesh"
//     console.log(this); //undefined   
// }

const chai= () =>{
    let username="hitesh"
    console.log(this); 
}
chai()

const chai2= (num1,num2) => num1+num2 //no need to write return statement if we are not add curly parenthesis
console.log(chai2(3,7));
 