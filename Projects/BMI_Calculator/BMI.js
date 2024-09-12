
// const inp=document.querySelectorAll('input');
// console.log(inp);
// const button=document.querySelector('.button');
// button.addEventListener('click',function(){
//     const value1=parseFloat(inp[0].value);
//     const value2=parseFloat(inp[1].value);
//     // const text=document.createTextNode(value1/(value2**2));
//     // document.querySelector('.result').appendChild(text);
//     const text=value1/(value2**2);
//     const resultElement = document.querySelector('.result');
//     resultElement.textContent = text;
// });

const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    // const text=height/(weight**2);
    const resultElement = document.querySelector('#results');
    if(height==='' || height<0 || isNaN(height)){
        resultElement.innerHTML="Please give a valid height"
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        resultElement.innerHTML="Please give a valid weight"
    }
    else{
        const bmi=(weight/((height**2)/1000)).toFixed(2);
        if(bmi<18.6){
            resultElement.innerHTML=`<span>BMI ${bmi} you are under weight</span>`
        }
        else if(bmi>24.9){
            resultElement.innerHTML=`<span>BMI ${bmi} you are over weight</span>`
        }
        else{
            resultElement.innerHTML=`<span>BMI ${bmi} you are normal weight</span>`
        }
    }
})


