// //singleton  if make with constructor
// // Object.create

// //object literals
// const sym=Symbol("key1")
// const js={
//     name:"Sanika",
//     age:18,
//     [sym]:"keyyyyyy",
//     email:"gdsdhsd@gmail.com",
//     isLoggedIn:false,
//     latLoginDays:["Monday","tue"]
// }

// console.log(js.email);
// console.log(js["email"]);
// console.log(js[sym]);
// console.log(typeof js[sym]);
// console.log(js);

// Object.freeze(js); //if any changes is made to js object it will be not applicable

// js.greeting=function(){
//     console.log("hello");  
// }

// js.greeting1234=function(){
//     console.log(`hello, ${this.name} `); //``string interpertation
    
// }
// console.log(js.greeting()); // hello
//     	                    // undefined
// console.log(js.greeting); // gives the reference of a functions
// console.log(js.greeting1234());

//using constructor a singleton objects

// const tinderUser=new Object()
// const tinderuser={}
// tinderuser.id="123"
// tinderuser.name="sanika"
// tinderuser.isLoggedIn=false

// console.log(tinderuser);

// const regularUser={ //nested objects
//     email:"sanijdbhd",
//     fullname:{
//         userfullname:{
//             firstname:"sanika",
//             lastname:"benake"
//         }
//     }
// }
// console.log(regularUser);
// console.log(regularUser.fullname.userfullname);

// const obj1={1:"a", 2:"b"}
// const obj2={3:"a", 4:"b"}

// const obj3={obj1,obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj4=Object.assign({},obj1,obj2) //object.assign(target,source)
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj5={...obj1,...obj2} //spread operator
// console.log((obj5)); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// // array of objects

// const users=[
//     {
//         id:1,
//         email:"hhdbdb"
//     },
//     {
//         id:2,
//         email:"jfirfjj"
//     },
//     {
//         id:3,
//         email:"uisyete"
//     }
// ]

// console.log(users[1].email);

// console.log(Object.keys(tinderuser)); //[ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderuser)); //[ '123', 'sanika', false ]

// console.log(Object.entries(tinderuser)); //[ [ 'id', '123' ], [ 'name', 'sanika' ], [ 'isLoggedIn', false ] ]

// console.log(tinderuser.hasOwnProperty('isLoggedIn')); // true

//object destructuring
const course={
    coursename:"js",
    price:"999",
    instructor:"sanika"
}

const {instructor:inst}=course
// console.log(instructor);
console.log(inst);

// const navbar=()=>{

// }

