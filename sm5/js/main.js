let a = prompt('Введите число')
let box = '<div class="box"><img class="img" src="./gif/mopc.gif" alt=""  width="400"></div>';
let box_list = document.querySelector('.box_list');

for(let i = 0; i < a; i++){
    box_list.insertAdjacentHTML('beforeend',box);
}