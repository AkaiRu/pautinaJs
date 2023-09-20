let button = document.querySelector('.button')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')
let button4 = document.querySelector('.button4')
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

