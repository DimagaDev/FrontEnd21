const ships = [], listShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
let popal = false, turn = 0;

const CreateShip = () => {
    for(let i = 0; i < listShips.length; i++){
        randShips(listShips[i]) // randShips(4)
    }
}

const randShips = (countPalub) => { // 4
    let randCoord = 0, tempArr = [], randGorVer = 0; // 24 + 3 = 27 <= 29
        randCoord = Math.floor(Math.random() * 99); //
        randGorVer = Math.floor(Math.random() * 1);

        if(!randGorVer){
            let tempEnd = parseInt(randCoord / 10) * 10 + 9, // 29 
            tempStart = randCoord - randCoord % 10 //  20

            if((randCoord + (countPalub - 1)) <= tempEnd){
                while(true){
                    randCoord = Math.floor(Math.random() * 99);
                    if(CheckCoord(randCoord, countPalub, '+')) break;
                }
                for(let j = 0; j < countPalub; j++){
                    tempArr.push(randCoord + j)
                }
            }else if((randCoord - (countPalub - 1)) >= tempStart){
                while(true){
                    randCoord = Math.floor(Math.random() * 99);
                    if(CheckCoord(randCoord, countPalub, '-')) break;
                }
                for(let j = 0; j < countPalub; j++){
                    tempArr.push(randCoord - j)
                }
            }
        }
        if(randGorVer){
            let tempEnd, tempStart, tempArr = []; // 24 - 20 = 4
            tempStart = randCoord % 10; // 4
            tempEnd = tempStart + 90; // 4 + 90 = 94

            if((randCoord - ((countPalub - 1) * 10)) >= tempStart){
                while(true){
                    randCoord = Math.floor(Math.random() * 99);
                    if(CheckCoord(randCoord, countPalub, '+')) break;
                }
                for(let j = 0; j < countPalub * 10; j += 10){
                    tempArr.push(randCoord - j) // 24, 14, 4
                }
            }else if((randCoord + ((countPalub - 1) * 10)) <= tempEnd){
                while(true){
                    randCoord = Math.floor(Math.random() * 99);
                    if(CheckCoord(randCoord, countPalub, '-')) break;
                }
                for(let j = 0; j < countPalub; j++){
                    tempArr.push(randCoord - j)
                }
            }
        }
        ships.push(tempArr)  
}

const CheckCoord = (start, count, symbol) => {
    for(let i = 0; i < ships.length; i++){
        if(symbol == '+'){
            for(let c = start; c < start + count; c++){
                if(ships[i].includes(c)){
                    return false
                }
            }
        }
        if(symbol == '-'){
            for(let c = start; c > start - count; c--){
                if(ships[i].includes(c)){
                    return false
                }
            }
        }
    }
    return true;
}

!turn && CreateShip();

const game = (event) => {
    turn++;
    popal = false;
    for (let i = 0; i < ships.length; i++) {
        lenghtArr(ships[i], event);
    }
    
    if (!popal){
        event.innerHTML = '*';
    }
    console.log(ships)
};

const lenghtArr = (arr, event) => {
    let temp = (parseInt(event.id.replace('td', ''))), count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === temp) {
            popal = true;
            event.innerHTML = arr[i] = 'X';
            
            for (let j = 0; j < arr.length; j++){
                if(arr[j] == 'X') {
                    count++;
                }
            }
            if(count == arr.length){
                document.getElementById('log').innerHTML += 
                `Coord: ${temp} AAAAIII UUBIL <br /> ` 
                break;
            }else {
                document.getElementById('log').innerHTML += 
                `Coord: ${temp} POPAL V MENYA <br />` 
            }
        }
    }
};