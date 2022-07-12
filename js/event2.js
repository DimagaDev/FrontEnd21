const change_color = () => {
    
    document.body.style.background = my.colorBg.value;

    document.body.style.color = my.color_text.value

    let el = document.getElementsByTagName('p');
    console.log(el)
    for(let i = 0; i < el.length; i++){
        el[i].style.fontSize = my.size.value + 'px'
    }
}

const execute = () => {
    let a = parseFloat(calc.x.value)
    let b = parseFloat(calc.y.value)

    if(calc.op.value === '+'){
        calc.res.value = a + b
    }
    if(calc.op.value === '-'){
        calc.res.value = a - b
    }
    if(calc.op.value === '*'){
        calc.res.value = a * b
    }
    if(calc.op.value === '/'){
        calc.res.value = a / b
    }
}

const showError = (container, errorMessage) => {
    container.className = 'error'
    let tempElem = document.createElement('span')
    tempElem.innerHTML = errorMessage
    tempElem.className = 'error-message'
    container.appendChild(tempElem)
}

const resetError = (container) => {
    container.className = '';
    if(container.lastChild.className === 'error-message'){
        console.log(container.lastChild)
        container.removeChild(container.lastChild)
    }
}

const validate = (form) => {
    let elems = form.elements;

    resetError(elems.from.parentNode)
    if(!elems.from.value){
        showError(elems.from.parentNode, 'Укажите от кого!')
    }

    resetError(elems.password.parentNode)
    if(!elems.password.value){
        showError(elems.password.parentNode, 'Укажите пароль!')
    }else if (elems.password.value !== elems.password2.value){
        showError(elems.password.parentNode, 'Пароли не совпадают!')
    }

    resetError(elems.message.parentNode)
    console.log(elems.message.value.length)
    if(!elems.message.value){ 
        showError(elems.message.parentNode, 'Отсутствует текст!')
    }
}