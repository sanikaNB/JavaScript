//primitive
//7 types:String , number,Bookean, null,undefined,symbols,bigint

const id=Symbol('123')
const id2=Symbol('123')
console.log(id===id2);//false cause they are unique

//refernce (non primitive)
//Array, Object, Functions

const heros=["sanika","hello"] // datatype object
let myObj={
    name:"sanika",
    age: 22,
}

const myFunction=function () {// datatype function 
    console.log("THis is how we declare function");
}

console.log(typeof myObj);

//stack(primitive (copy)), heap(non-Primitive (reference))
