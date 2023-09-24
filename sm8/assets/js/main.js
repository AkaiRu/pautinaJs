let button = document.querySelector('.button')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')
let button4 = document.querySelector('.button4')
let button5 = document.querySelector('.button5')
let button6 = document.querySelector('.button6')
let body = document.querySelector('body')
let container = document.querySelector('.container')
button.addEventListener('click', function(){
button.style = `color: white`
})
button.addEventListener('mousedown', function(){
button.style = `color: black`
button.style = `background: purple`
})
button2.addEventListener('mousedown', function(){
button2.style = `color: black`
button2.style = `background: DeepSkyBlue`
button3.style = `color: white`
button3.style = `background: red`
})
button3.addEventListener('mouseup', function(){
button3.style = `color: white`
button3.style = `background: black`
button2.style = `color: white`
button2.style = `background: black`
})
function rand(max){
return Math.floor(Math.random()*max);
}
button4.addEventListener('dblclick', function(){
button4.style = `color: black`
button4.style = `background: MediumVioletRed`
body.style.background = `rgba(${rand(255)},${rand(255)},${rand(255)},${(0.5)})`
})
button5.addEventListener('contextmenu', function(){
    button5.style.margin = "250px";
    alert('BYE-BYE')
})
button6.addEventListener('mouseout', function(){
    button6.style.background = `rgb(${rand(255)},${rand(255)},${rand(255)})`
})
    
const yourSound = new Audio();
yourSound.src = '/assets/audio/yamete_kudasai.mp3'; // ссылка на аудиофайл
document.getElementById('button10').onmousemove = function xz() {  
    setTimeout(function(){
        yourSound.play();
        body.style.background = `rgb(${rand(255)},${rand(255)},${rand(255)})`
    }, 100);
   
}