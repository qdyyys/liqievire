let timerId;
let timeSpent = 0;
let btn = document.querySelector('.title-game')
let load = document.querySelector('.loading')

btn.addEventListener('click', function(){
  load.classList.add('opacity-loader')
})

let circleReady = document.getElementById('loadClr')
load.addEventListener('mouseover', function (){
  let randomValue = Math.floor(Math.random() * 95) + 1;
console.log(randomValue);
  load.style.top = randomValue + '%'
  load.style.left = randomValue + '%'
  console.log(circleReady.style.right)  
})


