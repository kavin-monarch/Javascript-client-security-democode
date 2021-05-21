const input=document.querySelector('input');
const button=document.getElementById('bt');
const display=document.querySelector('.display');


input.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        display.innerHTML+=input.value;
    }
})


const exp ="(1+4)*2";  // getting user input from input tag

const res=eval(exp);  //evaluate Expression compile , Execute

console.log(res);    // 4



