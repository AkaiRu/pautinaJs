function rand(max){
    return Math.floor(Math.random()*max);
    }
    
    const form = document.querySelector('.form')
    
    const inputName =  document.getElementById('input_name')
    const inputDay = document.getElementById('input_date')
    
    let error = document.querySelector('.error')
    let error1 = document.querySelector('.error1')
    let error2 = document.querySelector('.error2')
    
    form.addEventListener('submit', function(event){
        event.preventDefault()
        
        if (inputName.value == ''){
            error1.innerHTML = 'Введите имя'
            inputName.style.boxShadow ='0 0 5px 2px red'
        } 
        else if (inputName.value.length < 2) {
            error1.innerHTML = 'Имя должно быть не меньше 2 символов'
            inputName.style.boxShadow ='0 0 5px 2px red'
        } else {
            inputName.style.boxShadow ='0 0 5px 2px green'
            error1.innerHTML = ''
        }
        
        if(inputDay.value == ''){
            error2.innerHTML = 'Введите год рождения'
            inputDay.style.boxShadow ='0 0 5px 2px red'
        }
        else if(inputDay.value.length > 4){
            error2.innerHTML = 'год должен быть не больше 4 символов'
            inputDay.style.boxShadow ='0 0 5px 2px red'
            error.innerHTML = 'Вы еще мал'   
        }else if(inputDay.value.length < 2){
            error2.innerHTML = 'год должен быть не менее 2 символов'
            inputDay.style.boxShadow ='0 0 5px 2px red'
            error.innerHTML = 'Вы еще мал'   
        }else{
            inputDay.style.boxShadow ='0 0 5px 2px green'
            error2.innerHTML = ''   
        
        }
    
        let a = Number(inputDay.value)
        let x = 2023
    
        let age = x - a;
        
        if(age < 18){
            error.innerHTML = '<p class="p-er">Вы еще мал(</p>'   
        }
        else if(inputDay.value.length < 2){
            error.innerHTML = 'Неверный год'
        }
        else if(inputName.value.length < 2){
            error1.innerHTML = 'Неверное имя'
        }
        else{
            error.innerHTML = '<a class="git" href="https://www.youtube.com/shorts/oQVa8y5bzmA">Ссылoчка на гимн</a>'   
        }
    
    })