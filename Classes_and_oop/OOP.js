// const user={
//     username:"sanika",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         console.log("Got user details");
//         console.log(this);
        
//     }
// }


// const promiseOne=new Promise();
// const date=new Date(); //new create a new context
console.log(user.username);
console.log(user.getUserDetails());

function Userr(username,logicCount,isLogged){
    this.username=username;
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this;
} //this have only one execution context


// const userOne=User("sanika",12,true)
// const userTwo=User("shdhdh",17,true) //if not user new the data is overwritten cause the userOne and usertwo uses same contextfor storing data
// console.log(userOne);

const userOne=new Userr("sanika",12,true);
const userTwo=new Userr("shdhdh",17,true);
console.log(userOne);
console.log(userTwo);

