 /*
  click – происходит, когда кликнули
 на элемент левой кнопкой мыши
 contextmenu – происходит, когда кликнули
 на элемент правой кнопкой мыши
 mouseover – возникает, когда на элемент наводится мышь
 mousedown и mouseup – когда кнопку мыши нажали или отжали
 mousemove – при движении мыши

 События на элементах управления:

 submit – посетитель отправил форму <form>
 focus – посетитель фокусируется на элементе,
 например нажимает на <input>

 Клавиатурные события:

 keydown – когда посетитель нажимает клавишу
 keyup – когда посетитель отпускает клавишу

 События документа:

 DOMContentLoaded – когда HTML загружен и обработан,
 DOM документа полностью построен и доступен.
 События CSS:

 transitionend – когда CSS-анимация завершена.
 */

const colors = ['red', 'yellow', 'green', 'lightBlue', 'blue', 'purpule']
let numColor = 0;
const changeColor = (a, b) => {
    document.body.style.background = colors[numColor];
    numColor++;
    if(numColor === colors.length){
        numColor = 0;
    }
}

const count = () => {
    for(let i = 0; i < 3; i++){
        alert('i = ' + i)
    }
}

const change2 = () => {
    picSmile.src = '../Image/smile.png'
}

const change1 = () => {
    picSmile.src = '../Image/sad.jpg'
}