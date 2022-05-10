//SQUARE 8 x 8

let width = 8;

function printSquare(width) {

    //Initialize the variable 
    let result = "";


    //Print rows, it doesn't look like a square so I reduced by 2 times 
    for (let i = 0; i < width / 2; i++) {
        //print columns
        for (let j = 0; j < width; j++) {
            result+="*";
        } 
        result+="\n";
    }
    return result;
}

console.log(printSquare(width));


// RECTANGULAR 4 x 8 

width = 8;
let height = 2;

function printRectangular(height, width) {

    //Initialize the variable 
    let result = "";

    //Print rows
    for (let i = 0; i < height; i++) {
        //print columns
        for (let j = 0; j < width; j++) {
            result+="*";
        } 
        result+="\n";
    }
    return result;

}

console.log(printRectangular(height, width));

// PYRAMID - 8 stars

height = 8;

function printPyramid(height) {

    //Initialize the variable 
    let result = "";


    //Print rows
    for (let i = 0; i < height; i++) {
        //print columns
        for (let j = 0; j < i; j++) {
            result+="*";
        } 
        result+="\n";
    }
    return result;
}

console.log(printPyramid(height));

// HOUSE 8 x 8 with 2 X 2 window 

// ********
// ***  ***
// ***  ***
// ********


// ********
// ***  ***
// ***  ***
// ********
// ********


width = 8;
height = width / 2


function printHouse(width) {

    //Initialize the variable 
    let result = "";


    //Print rows
    for (let i = 0; i < height; i++) {
        //print columns
        for (let j = 0; j < width; j++) {
            // Print a star if it's the first or the last rows
            if(i == 0 || i == height - 1){
                result+="*";
            }
            else {
                // Print a space if it's in the middle of columns and rows 2x2 otherwise a star
                if(i == (height - 2) / 2 || i == (((height - 2) / 2) + 1)){
                    if(j == (width - 2) / 2  || j == (((width - 2) / 2 + 1))){
                        result+=" ";
                    } 
                    else {
                        result+="*";  
                    }
                }
                else {
                    result+="*"; 
                }
            }    
        } 
        result+="\n";
    }
    return result;
}

console.log(printHouse(width));


