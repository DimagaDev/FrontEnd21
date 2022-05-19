// let first_num = 10;

// var v = 20;
// v = 67;
// const C = 50;

// // first_num = first_num + 10;
// first_num += 10;


// console.log(first_num) // ? 






// console.log(a, " < ", b, " = ", a < b)
// console.log(a, " > ", b, " = ", a > b)
// console.log(a, " <= ", b, " = ", a <= b)
// console.log(a, " >= ", b, " = ", a >= b)
// console.log(a, " == ", b, " = ", a == b)
// console.log(a, " != ", b, " = ", a != b)

// let respons = '', b = false;
// console.log(a, " && ", b, " = ", a && b)
// console.log(b, " && ", a, " = ", b && a)
// console.log(a, " && ", a, " = ", a && a)
// console.log(b, " && ", b, " = ", b && b)
// console.log('----------------------------')
// console.log(a, " || ", b, " = ", a || b)
// console.log(b, " || ", a, " = ", b || a)
// console.log(a, " || ", a, " = ", a || a)
// console.log(b, " || ", b, " = ", b || b)

// !respons && console.log('error data')

// let num = prompt("Enter number: ")

// if(num > 10){
//     console.log('num > 10')
// }else if(num == 10){
//     console.log('num == 10')
// }else{
//     console.log('num < 10')
// }

// console.log(num > 10 ? "num > 10" : "num < || == 10") 
// operator(выражение) ? operator : operator

// let numFirst = parseInt(prompt("Enter first number: "))
// let numSecond = parseInt(prompt("Enter second number: "))
// let operator = prompt("Enter operator number: ")

// if(operator == '+'){
//     console.log(numFirst, " + ", numSecond, " = ", numFirst + numSecond)
// }else if (operator == '-'){
//     console.log(numFirst, " - ", numSecond, " = ", numFirst - numSecond)
// }else if (operator == '*'){
//     console.log(numFirst, " * ", numSecond, " = ", numFirst * numSecond)
// }else if (operator == '/'){
//     console.log(numFirst, " / ", numSecond, " = ", numFirst / numSecond)
// }else{
//     console.log("Error operator!!!!!!!!!")
// }

// console.log(operator)


// Switch operator 

// let dou = 2;

// switch(dou){
//     case 1: 
//         console.log('case 1');
//         break;
//     case 2: 
//         console.log('case 2');
//         break;
//     case 3: 
//         console.log('case 3');
//         break;
//     default:
//         console.log('case error');
// }


// let zero = 0, two = 20;

//   ( 1..10 < 10 ) = false
// while(zero <= 10){
//     zero++;
//     if(!(zero % 2)){
//         continue;
//     }
//     console.log(zero)
    
    
// }

// do{
//     console.log('one repit');
// }while(zero);


// let i = 0;
// for( ; ; ){
//     if(i == 10){
//         break;
//     }
//     console.log("i = ", i)
//     i++;
// }


// for( let i = 1, j = 10; i < 10; i++, j--){
//     console.log('i * j = ', i * j)
// }

// console.log('end! i = ', i);

// let i = 0;
// for( ; i < 10; i++);

// console.log('end! i = ', i);


// for (let i = 1; i < 10; i++){ // i = 2
//     let res = '';
//     for(let j = 1; j < 10; j++){ // j = 2
//         res += " " + i * j;// 2, 4, 6 
//     }
//     document.write(res + '<br />')
// }

// let i = 0; 
// while(i < 10){
//     let j = 0, res = '';
//     while(j < 10){
//         res += ' *'
//         j++;
//     }
//     document.write(res + '<br />')
//     i++;
// }


// let width = prompt('enter width')
// let height = prompt('enter height')

// document.write('<pre>')
// for(let i = 0; i < height; i++){
//     for(let j = 0; j < width; j++){
//         if(i == 0 || i == height - 1 || j == 0 || j == width - 1){
//             document.write(' *')
//         }else{
//             document.write('  ')
//         }
//     }
//     document.write('<br />')
// }
// document.write('</pre>')

// --------------------------------------------------------------
