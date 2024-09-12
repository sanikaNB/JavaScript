const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_Heros=[...marvel_heros,...dc_heros]
console.log(all_Heros);

const new_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const modified_array=new_array.flat(Infinity)
console.log(modified_array);


console.log(Array.isArray("snaika"));
console.log(Array.from("snaika"));
console.log(Array.from({name:"sanika"})); //imp


let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3));
