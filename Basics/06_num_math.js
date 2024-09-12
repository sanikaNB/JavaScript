const balance=new Number(1457.24)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));
console.log(balance.toPrecision(3));

//Math
console.log(Math.abs(-4));
console.log(Math.round(4.45));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(1,2,3,4,0));

console.log(Math.random());//gives value between 0-1
console.log((Math.random()*10)+1);// gives value between 1-10
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)