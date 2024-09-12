const name="sanika"
const num=20
console.log(`hello my name is ${name} and number id ${num}`)

const game=new String('hello')// string datatype is object
console.log(game[0]);
console.log(game.length);
console.log(game.toUpperCase);
console.log(game.charAt(2));
console.log(game.indexOf('l'));

const newStr=game.substring(0,3)
console.log(newStr);

const newsliced=game.slice(-8,2)
console.log(newsliced);

const spaceStr="    sanika  "
console.log(spaceStr.trim());
const URL="httgfddhj%20sanika"
URL=URL.replace('%20','-')