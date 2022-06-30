const ships = [],
        listShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
let popal = false, turn = 0;

const CreateShip = () => {
    for(let i = 0; i < listShips.length; i++){
        randShips(listShips[i])
    }
}

const randShips = (countPalub) => {
    let randPalub = 0, tempArr = [];
        randPalub = Math.floor(Math.random() * 99); //54
        let tempEnd = parseInt(randPalub / 10) * 10 + 9,
        tempStart = randPalub - randPalub % 10 

        if((randPalub + (countPalub - 1)) <= tempEnd){
            for(let j = 0; j < countPalub; j++){
                tempArr.push(randPalub + j)
            }
        }else if((randPalub - (countPalub - 1)) >= tempStart){
            for(let j = 0; j < countPalub; j++){
                tempArr.push(randPalub - j)
            }
        }
        ships.push(tempArr)  
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