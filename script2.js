const box = document.querySelector('.box');
const btn = document.querySelector('.btn');

const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener('click',()=>{
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hex[getrandomnumber()];
    }
    document.body.style.background = hexColor;
    box.textContent = `Background-Color : ${hexColor}`;
    
})
function getrandomnumber(){
    return Math.floor(Math.random()*hex.length);

}
