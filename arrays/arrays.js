const myArr=[0,1,2,3,4,5] 
const myHeros=["asdd","jdgf"]
const myArr2=new Array(1,2,3,4)
//js array are resiziable
console.log(myArr[0]);

//Array method
myArr.push(6)
myArr.pop()
myArr.unshift(9);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
const newArr=myArr.join() //joins to form a string
console.log(newArr);
console.log(typeof newArr); //string

const arr3=myArr.slice(1,3)
console.log(arr3);    //[ 1, 2 ]
console.log(myArr);   //[ 0, 1, 2, 3, 4, 5 ]

const arr4=myArr.splice(1,3)
console.log(arr4);    //[ 1, 2, 3 ]
console.log(myArr);   //[ 0, 4, 5 ]