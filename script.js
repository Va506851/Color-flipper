const Herocontainer = document.querySelector('.hero-container');
const box = document.querySelector('.box');
const btn = document.querySelector('.btn');

const arr = ['#C96868','#FADFA1', "#FFF4EA",'#7EACB5','#624E88','#8967B3',"#CB80AB"]
let currentIndex = 0;
btn.addEventListener('click',()=>{
   Herocontainer.style.background = arr[currentIndex];
   box.textContent = `BackgroundColor : ${arr[currentIndex]}`
   currentIndex = (currentIndex + 1) % arr.length;
})