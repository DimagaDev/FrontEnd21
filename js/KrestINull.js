let num = 0

function step(event){
    let tr = event.parentNode.parentNode
    if(event.innerHTML == ''){
            event.innerHTML = 'X'
            if(num == 0){
                while(true){
                    let rand = Math.floor(Math.random() * 8)
                    if(tr.getElementsByTagName('td')[rand].innerHTML == ''){
                        tr.getElementsByTagName('td')[rand].innerHTML = '0'
                        break;
                    }
                }
            }else{
                botTurn(event)
            }
        num++;
        if(num >= 5) { analiz(event)}
    }
    else if(num == 8) { alert('Ничья!')}
    else {
        alert('Клетка занята. Повторите ход!')
    }
}

function botTurn(event){
    let tr = event.parentNode.parentNode
    let el = [];

    for(let i = 0; i < 9; i++){
        el[i] = tr.getElementsByTagName('td')[i].innerHTML
    }

    // gorizontal Win 1.1
    if(el[0] == '0' && el[1] == '0' && el[2] == ''){
        tr.getElementsByTagName('td')[2].innerHTML = '0'
    }
    // gorizontal 1.2
    else if(el[0] == '0' && el[1] == '' && el[2] == '0'){
        tr.getElementsByTagName('td')[1].innerHTML = '0'
    }
    // gorizontal 1.3
    else if(el[0] == '' && el[1] == '0' && el[2] == '0'){
        tr.getElementsByTagName('td')[0].innerHTML = '0'
    }
    // gorizontal Win 2.1
    else if(el[3] == '0' && el[4] == '0' && el[5] == ''){
        tr.getElementsByTagName('td')[5].innerHTML = '0'
    }
    // gorizontal 2.2
    else if(el[3] == '0' && el[4] == '' && el[5] == '0'){
        tr.getElementsByTagName('td')[4].innerHTML = '0'
    }
    // gorizontal 2.3
    else if(el[3] == '' && el[4] == '0' && el[5] == '0'){
        tr.getElementsByTagName('td')[3].innerHTML = '0'
    }
     // gorizontal Win 3.1
    else if(el[6] == '0' && el[7] == '0' && el[8] == ''){
        tr.getElementsByTagName('td')[8].innerHTML = '0'
    }
    // gorizontal 3.2
    else if(el[6] == '0' && el[7] == '' && el[8] == '0'){
        tr.getElementsByTagName('td')[7].innerHTML = '0'
    }
    // gorizontal 3.3
    else if(el[6] == '' && el[7] == '0' && el[8] == '0'){
        tr.getElementsByTagName('td')[6].innerHTML = '0'
    }
     //---------- vertical Win 1.1
    else if(el[0] == '0' && el[3] == '0' && el[6] == ''){
        tr.getElementsByTagName('td')[6].innerHTML = '0'
    }
    // vertical 1.2
    else if(el[0] == '0' && el[3] == '' && el[6] == '0'){
        tr.getElementsByTagName('td')[3].innerHTML = '0'
    }
    // vertical 1.3
    else if(el[0] == '' && el[3] == '0' && el[6] == '0'){
        tr.getElementsByTagName('td')[0].innerHTML = '0'
    }
    // vertical Win 2.1
    else if(el[1] == '0' && el[4] == '0' && el[7] == ''){
        tr.getElementsByTagName('td')[7].innerHTML = '0'
    }
    // vertical 2.2
    else if(el[1] == '0' && el[4] == '' && el[7] == '0'){
        tr.getElementsByTagName('td')[4].innerHTML = '0'
    }
    // vertical 2.3
    else if(el[1] == '' && el[4] == '0' && el[7] == '0'){
        tr.getElementsByTagName('td')[1].innerHTML = '0'
    }
    // vertical Win 3.1
    else if(el[2] == '0' && el[5] == '0' && el[8] == ''){
        tr.getElementsByTagName('td')[8].innerHTML = '0'
    }
    // vertical 3.2
    else if(el[2] == '0' && el[5] == '' && el[8] == '0'){
        tr.getElementsByTagName('td')[5].innerHTML = '0'
    }
    // vertical 3.3
    else if(el[2] == '' && el[5] == '0' && el[8] == '0'){
        tr.getElementsByTagName('td')[2].innerHTML = '0'
    }
    // --------------------- diagonal 1.1
    else if(el[0] == '0' && el[4] == '0' && el[8] == ''){
        tr.getElementsByTagName('td')[8].innerHTML = '0'
    }
    // diagonal 1.2
    else if(el[0] == '0' && el[4] == '' && el[8] == '0'){
        tr.getElementsByTagName('td')[4].innerHTML = '0'
    }
    // diagonal 1.3
    else if(el[0] == '' && el[4] == '0' && el[8] == '0'){
        tr.getElementsByTagName('td')[0].innerHTML = '0'
    }
    // --------------------- diagonal 2.1
    else if(el[2] == '0' && el[4] == '0' && el[6] == ''){
        tr.getElementsByTagName('td')[6].innerHTML = '0'
    }
    // diagonal 2.2
    else if(el[2] == '0' && el[4] == '' && el[6] == '0'){
        tr.getElementsByTagName('td')[4].innerHTML = '0'
    }
    // diagonal 2.3
    else if(el[2] == '' && el[4] == '0' && el[6] == '0'){
        tr.getElementsByTagName('td')[2].innerHTML = '0'
    }
    // ---------------------------------------------
    // gorizontal bad X 1.1
    else if(el[0] == 'X' && el[1] == 'X' && el[2] == ''){
        tr.getElementsByTagName('td')[2].innerHTML = '0'
    }
    // gorizontal 1.2
    else if(el[0] == 'X' && el[1] == '' && el[2] == 'X'){
        tr.getElementsByTagName('td')[1].innerHTML = '0'
    }
    // gorizontal 1.3
    else if(el[0] == '' && el[1] == 'X' && el[2] == 'X'){
        tr.getElementsByTagName('td')[0].innerHTML = '0'
    }
    // gorizontal bad X 2.1
    else if(el[3] == 'X' && el[4] == 'X' && el[5] == ''){
        tr.getElementsByTagName('td')[5].innerHTML = '0'
    }
    // gorizontal 2.2
    else if(el[3] == 'X' && el[4] == '' && el[5] == 'X'){
        tr.getElementsByTagName('td')[4].innerHTML = '0'
    }
    // gorizontal 2.3
    else if(el[3] == '' && el[4] == 'X' && el[5] == 'X'){
        tr.getElementsByTagName('td')[3].innerHTML = '0'
    }
    // gorizontal bad X 3.1
    else if(el[6] == 'X' && el[7] == 'X' && el[8] == ''){
        tr.getElementsByTagName('td')[8].innerHTML = '0'
    }
    // gorizontal 3.2
    else if(el[6] == 'X' && el[7] == '' && el[8] == 'X'){
        tr.getElementsByTagName('td')[7].innerHTML = '0'
    }
    // gorizontal 3.3
    else if(el[6] == '' && el[7] == 'X' && el[8] == 'X'){
        tr.getElementsByTagName('td')[6].innerHTML = '0'
    }
    //------------- vervical bad X 1.1
    else if(el[0] == 'X' && el[3] == 'X' && el[6] == ''){
        tr.getElementsByTagName('td')[6].innerHTML = '0'
    }
    // vervical 1.2
    else if(el[0] == 'X' && el[3] == '' && el[6] == 'X'){
        tr.getElementsByTagName('td')[3].innerHTML = '0'
    }
    // vervical 1.3
    else if(el[0] == '' && el[3] == 'X' && el[6] == 'X'){
        tr.getElementsByTagName('td')[0].innerHTML = '0'
    }
    // vervical bad X 2.1
    else if(el[1] == 'X' && el[4] == 'X' && el[7] == ''){
        tr.getElementsByTagName('td')[7].innerHTML = '0'
    }
    // vervical 2.2
    else if(el[1] == 'X' && el[4] == '' && el[7] == 'X'){
        tr.getElementsByTagName('td')[4].innerHTML = '0'
    }
    // vervical 2.3
    else if(el[1] == '' && el[4] == 'X' && el[7] == 'X'){
        tr.getElementsByTagName('td')[1].innerHTML = '0'
    }
    // vervical bad X 3.1
    else if(el[2] == 'X' && el[5] == 'X' && el[8] == ''){
        tr.getElementsByTagName('td')[8].innerHTML = '0'
    }
    // vervical 3.2
    else if(el[2] == 'X' && el[5] == '' && el[8] == 'X'){
        tr.getElementsByTagName('td')[5].innerHTML = '0'
    }
    // vervical 3.3
    else if(el[2] == '' && el[5] == 'X' && el[8] == 'X'){
        tr.getElementsByTagName('td')[2].innerHTML = '0'
    }
    // -------------- diagonal bad X 1.1
    else if(el[0] == 'X' && el[4] == 'X' && el[8] == ''){
        tr.getElementsByTagName('td')[8].innerHTML = '0'
    }
    // diagonal 1.2
    else if(el[0] == 'X' && el[4] == '' && el[8] == 'X'){
        tr.getElementsByTagName('td')[4].innerHTML = '0'
    }
    // diagonal 1.3
    else if(el[0] == '' && el[4] == 'X' && el[8] == 'X'){
        tr.getElementsByTagName('td')[0].innerHTML = '0'
    }
    // -------------- diagonal bad X 2.1
    else if(el[2] == 'X' && el[4] == 'X' && el[6] == ''){
        tr.getElementsByTagName('td')[6].innerHTML = '0'
    }
    // diagonal 2.2
    else if(el[2] == 'X' && el[4] == '' && el[6] == 'X'){
        tr.getElementsByTagName('td')[4].innerHTML = '0'
    }
    // diagonal 2.3
    else if(el[2] == '' && el[4] == 'X' && el[6] == 'X'){
        tr.getElementsByTagName('td')[2].innerHTML = '0'
    }
}

function analiz(event){ 
    let tr = event.parentNode.parentNode
    let el = [];

    for(let i = 0; i < 9; i++){
        el[i] = tr.getElementsByTagName('td')[i].innerHTML
    }
    let win = false
    // gorizontal
    if(el[0] === el[1] && el[1] === el[2] && (el[0] === 'X' || el[0] === '0')){
        alert(el[0] + ' Win!')
        win = true
    }
    if(el[3] === el[4] && el[4] === el[5] && (el[3] === 'X' || el[3] === '0')){
        alert(el[3] + ' Win!')
        win = true
    }
    if(el[6] === el[7] && el[7] === el[8] && (el[6] === 'X' || el[6] === '0')){
        alert(el[6] + ' Win!')
        win = true
    }
    // vertical
    if(el[0] === el[3] && el[3] === el[6] && (el[0] === 'X' || el[0] === '0')){
        alert(el[0] + ' Win!')
        win = true
    }
    if(el[1] === el[4] && el[4] === el[7] && (el[1] === 'X' || el[1] === '0')){
        alert(el[1] + ' Win!')
        win = true
    }
    if(el[2] === el[5] && el[5] === el[8] && (el[2] === 'X' || el[2] === '0')){
        alert(el[2] + ' Win!')
        win = true
    }
    // diagonal
    if(el[0] === el[4] && el[4] === el[8] && (el[0] === 'X' || el[0] === '0')){
        alert(el[0] + ' Win!')
        win = true
    }
    if(el[2] === el[4] && el[4] === el[6] && (el[2] === 'X' || el[2] === '0')){
        alert(el[2] + ' Win!')
        win = true
    }

    if(win){
        for(let i = 0; i < 9; i++){
            tr.getElementsByTagName('td')[i].innerHTML = ''
        }
        win = false
        num = 0
    }
}