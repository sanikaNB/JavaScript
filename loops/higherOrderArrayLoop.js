// const arr=[1,2,34,5,6]
// for(const num of arr){
//     console.log(num);   
// }

// const grret="hello all"
// for(const i of grret){
//     console.log(i);
    
// }

const map=new Map() //unique values are maintained
map.set('in','india')
map.set('usa','USA')
map.set('in','india')

console.log(map); //Map(2) { 'in' => 'india', 'usa' => 'USA' }
 
// for(const key of map){
//     console.log(key);
    
// }   [ 'in', 'india' ]
    // [ 'usa', 'USA' ]


/***************for-of****************/
for(const [key,value] of map){
    console.log(key, ':-',value);
    
}//in :- india
 //usa :- USA

 const myObj={
    'game1':'nfs',
    'game2':'spiderman'
 }

//  for(const [key,value] of myObj){
//     console.log(key, "points to" ,value);
    
//  }// myObj is not iterable


/**************************************************/


/************************for-in**************************/

for(const key in myObj){
        console.log(key ,":-" ,myObj[key]);
        
}
// game1 :- nfs
// game2 :- spiderman

const arr=[1,2,3,45,66,9]

for(const key in arr){
    console.log(key ,":-" ,arr[key]);
}
// 0 :- 1
// 1 :- 2
// 2 :- 3
// 3 :- 45
// 4 :- 66
// 5 :- 9




/**************************************************/


/************************for-Each**************************/
const coding=["cpp","java","js","c"]
// coding.forEach(function (val){
//     console.log(val);
    
// })

// function printme(val){
//     console.log(val);    
// }
// coding.forEach(printme)

coding.forEach((val, index, arr)=>{
    console.log(val, index, arr);
})
// cpp 0 [ 'cpp', 'java', 'js', 'c' ]
// java 1 [ 'cpp', 'java', 'js', 'c' ]
// js 2 [ 'cpp', 'java', 'js', 'c' ]
// c 3 [ 'cpp', 'java', 'js', 'c' ]

const myObjSet=[
    {
        lang:"cpp",
        fileName:"hello"
    },
    {
        lang:"java",
        fileName:"hey"
    },
    {
        lang:"js",
        fileName:"javaScript"
    },
    {
        lang:"css",
        fileName:"styling"
    },
]

myObjSet.forEach((val,index)=>{
    console.log(index,')',val.fileName);
    
})
// 0 ) hello
// 1 ) hey
// 2 ) javaScript
// 3 ) styling
