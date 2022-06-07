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

// for (int i=1;i<=31;i++)
// {
// cout<<i<<"\t";
// if (i%7==0)
// cout<<"\n\n";
// }
// cout<<"\n\n";

// --------------------------------------------------------------

// let ra = 7,
// 	rb = 1,
// 	rc = 3,
// 	rd = 0,
// 	ans,
// 	bull = 0,
// 	cow = 0,
// 	count = 0, res = '';

// while (true) {
// 	ans = parseInt(prompt('enter'));
// 	if (ans == 1111) {
// 		alert(`God mode = true\nnumber = ${ra} ${rb} ${rc} ${rd}`); 
// 		continue;
// 	}
// 	count++;
// 	if (ans < 1000) {
// 		alert('Введите число не с 0!');
// 		continue;
// 	}
// 	if (ans > 9999) {
// 		alert('Введите четырехзначное число!');
// 		continue;
// 	}
// 	// 1234
// 	let a = parseInt(ans / 1000), // 1.234
// 		b = parseInt(ans / 100) % 10, // 12.34 = 12 % 10
// 		c = parseInt(ans / 10) % 10, // 123.4 = 123 % 10
// 		d = ans % 10; // 1234 % 10 
// 	if (a == b || a == c || a == d || b == c || b == d || c == d) {
// 		alert('Повторение цифр! Повторите ввод!');
// 		continue;
// 	}
// 	if (a == ra) {
// 		bull++;
// 	}
// 	if (b == rb) {
// 		bull++;
// 	}
// 	if (c == rc) {
// 		bull++;
// 	}
// 	if (d == rd) {
// 		bull++;
// 	}
// 	if (ra == a || ra == b || ra == c || ra == d) {
// 		cow++;
// 	}
// 	if (rb == a || rb == b || rb == c || rb == d) {
// 		cow++;
// 	}
// 	if (rc == a || rc == b || rc == c || rc == d) {
// 		cow++;
// 	}
// 	if (rd == a || rd == b || rd == c || rd == d) {
// 		cow++;
// 	}

// 	if (bull == 4) {
// 		alert(`You Win! Bull = ${bull} \nCount = ${count}`);
// 		break;
// 	}
// 	res += `ans ${ans} \nBull = ${bull}, Cow = ${cow - bull} \n`;
// 	alert(res);
// 	bull = cow = 0;
// }


// for( let x = 0; x < 2; x++){
// 	for(let y = 0; y < 2; y++){
// 		if(x == 0){
// 			console.log('#');
// 		}else{
// 			console.log('%');
// 		}
// 	}
// }

// for (let i = 0; i < 2; i++){
// 	for(let j; j < 3; j++){
// 		console.log(1)
// 	}
// }

// for(let i = 0; i < 3; i++){ // i = 0

// 	for(let j = 2; j <= 0; j--){ // j = 2 <= 0
// 		console.log(j)
// 	}
// }

// let i = 0, j = 0;

// while(i < 2){ // i = 2
// 	console.log('out');
// 	while(j < 2){ // j = 2
// 		console.log('in')
// 		j++;
// 	}
// 	i++;
// }

// console.log('i - ', i, ', j - ', j)

// let i = 3;
// while(i > 0){ // i = 0
// 	i--;
// 	while(i == 2){
// 		break;
// 		i = -1;
// 	}
// }

// console.log(i)

// let i = 0;
// while(i < 3){
// 	for(let j = 0; j < 3; j++){
// 		i++;
// 	}
// }

// console.log(i);

// ================================= array ===========================================
// index   0  1  2  3  4  5  6  7  8  9
// let arr = [1, 2, -33, 4, 5, 6, 70, 8, 9, 10], min = arr[0], max = arr[0];
// // min = 1, max = 1
// for(let i = 0; i < 10; i++){
// 	if(min > arr[i]){ // 1 > -33
// 		min = arr[i]; // -33
// 	}
// 	if(max < arr[i]){ // 70 < 8
// 		max = arr[i]; // 70
// 	}
	
// }

// console.log('Min = ', min, ', Max = ', max)


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i = 0, j = 9; i < 5; i++, j--){

// 	let temp = arr[i]; 
// 	arr[i] = arr[j]; 
// 	arr[j] = temp;

// }

// console.log(arr)


// let arr = [2, '+', 2, '*', 2, '-', 2, '/', 2]


// for(let i = 0; i < arr.length; i++){
// 	if(arr[i] == '*'){
// 		arr[i - 1] = arr[i - 1] * arr[i + 1]
// 		arr.splice(i, 2);
// 	}
// }


// for(let i = 0; i < arr.length; i++){
// 	if(arr[i] == '+'){
// 		arr[i - 1] = arr[i - 1] + arr[i + 1]
// 		arr.splice(i, 2);
// 	}
// }


// console.log(arr[0])

// let array = ['(', 2, '-', 2, ')', '*', 2, '+', 2, '*', 2];

// let array = []

// for(let i = 0; i < 10; i++){
// 	// array.push(Math.floor(Math.random() * 20))
// 	array[i] = Math.floor(Math.random() * 20);
// }

// console.log(array)
//          0  1  2
// let arr = [[1, 2, 3], // 0
// 		   [4, 5, 6], // 1
// 		   [7, 8, 9]  // 2
// 		];

// let min, max;

// for(let i = 0; i < arr.length; i++){ // i = 0
// 	for(let j = 0; j < arr.length; j++){ // j = 0, 1, 2
// 		arr[i][j] = Math.floor(Math.random() * 90 + 10)
// 		if(i == 0 && j == 0){ min = max = arr[0][0]}
// 		document.write(arr[i][j] + ' ')
// 		if(min > arr[i][j]){ min = arr[i][j]}
// 		if(max < arr[i][j]){ max = arr[i][j]}
// 	}
// 	document.write('<br>')
// }

// document.write('<br> Min = ', min, ', Max = ', max)

// let arr = [[1, 2, 3], // 0
// 		   [4, 5, 6], // 1
// 		   [7, 8, 9]  // 2
// 		];

// let sum = 0;
// for(let i = 0; i < arr.length; i++){ // i = 0
// 	for(let j = 0; j < arr.length; j++){ // j = 0, 1, 2
// 		arr[i][j] = Math.floor(Math.random() * 5)
// 		if(j + i == 2){sum += arr[i][j]}
// 		document.write(arr[i][j] + ' ')
// 	}
// 	document.write('<br>')
// }

// document.write('<br> Sum = ', sum)

// let arr = [[1, 2, 3], // 0
// 		   [4, 5, 6], // 1
// 		   [7, 8, 9]  // 2
// 		];

// let col1 = 0, col2 = 0, col3 = 0;
// for(let i = 0; i < arr.length; i++){ // i = 0
// 	for(let j = 0; j < arr.length; j++){ // j = 0, 1, 2
// 		arr[i][j] = Math.floor(Math.random() * 3 + 1)
// 		if(j == 0){col1 += arr[i][j]}
// 		if(j == 1){col2 += arr[i][j]}
// 		if(j == 2){col3 += arr[i][j]}
// 		document.write(arr[i][j] + ' ')
// 	}
// 	document.write('<br>')
// }


// document.write('col1 = ', col1, ', col2 = ', col2, ', col3 = ', col3)

//             0    1    2    3    4    5    6    7    8    9
// let board = [['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'], // 0
// 			 ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'], // 1
// 			 ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'], // 2
// 			 ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'], // 3
// 			 ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'], // 4
// 			 ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'], // 5
// 			 ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'], // 6
// 			 ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'], // 7
// 			 ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'], // 8
// 			 ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],] // 9

// let secBoard = board;

// let bigShip = [[8, 4], [8, 5], [8, 6], [8, 7]]
// let midleShipOne = [[1, 3], [2, 3], [3, 3]]
// let midleShipTwo = [[5, 3], [6, 3], [7, 3]]

// let twoShip = [[5, 5], [5, 6]] 

// twoShip[0][0] = Math.floor(Math.random() * 9)
// twoShip[0][1] = Math.floor(Math.random() * 9)
// twoShip[1][0] = twoShip[0][0]
// twoShip[1][1] = twoShip[0][1] + 1



// document.write(twoShip)

// let goriz = prompt('Введите координаты по горизонтали: ')
// let vertik = prompt('Введите координаты по вертикали: ')


// for(let i = 0; i < board.length; i++){

// 	for(let j = 0; j < board.length; j++){

// 		if(j == twoShip[0][0] && i == twoShip[0][1]){ board[i][j] = '*'; }
// 		if(j == twoShip[1][0] && i == twoShip[1][1]){ board[i][j] = '*'; }

// 		if(j == bigShip[0][0] && i == bigShip[0][1]){ board[i][j] = '*'; }
// 		if(j == bigShip[1][0] && i == bigShip[1][1]){ board[i][j] = '*'; }
// 		if(j == bigShip[2][0] && i == bigShip[2][1]){ board[i][j] = '*'; }
// 		if(j == bigShip[3][0] && i == bigShip[3][1]){ board[i][j] = '*'; }

// 		if(j == midleShipOne[0][0] && i == midleShipOne[0][1]){ board[i][j] = '*'; }
// 		if(j == midleShipOne[1][0] && i == midleShipOne[1][1]){ board[i][j] = '*'; }
// 		if(j == midleShipOne[2][0] && i == midleShipOne[2][1]){ board[i][j] = '*'; }

// 		if(j == midleShipTwo[0][0] && i == midleShipTwo[0][1]){ board[i][j] = '*'; }
// 		if(j == midleShipTwo[1][0] && i == midleShipTwo[1][1]){ board[i][j] = '*'; }
// 		if(j == midleShipTwo[2][0] && i == midleShipTwo[2][1]){ board[i][j] = '*'; }

// 		if(secBoard[vertik][goriz] == '*'){
// 			board[i][j] = 'x'
// 		}

// 		document.write(board[i][j] + ' | ');
// 	}
// 	document.write('<br>')
// }

/* Синтаксис создания функции*/

// function showMessage(/* arguments */) { // Определение 
// 	console.log('Hello')
// }

// showMessage() // вызов 

// let one = 10, two = 20, three = 30

// function sum(a, b){
// 	// console.log(a, " + ", b, " = ", a + b)
// 	return a + b
// }

// function divade (a, b) {
// 	return a * b
// }


// let res = sum(2, 2)


// console.log('res = ', res)

// res = divade(3, sum(2, 2))

// console.log('res = ', res)

// ---------------------------------------------
// function star (count, chik){
// 	for(let i = 1; i <= count; i++){
// 		if(i % 10 == 0){
// 			document.write(chik + '<br>')
// 		}else{
// 			document.write(chik)
// 		}
// 	}
// 	document.write('<br />')
// }

// star(30, '^')
// star(10, '|')
// star(50, '=')


// function f(a){
// 	// if(a % 2 == 0){
// 	// 	return true
// 	// }else{
// 	// 	return false
// 	// }

// 	return !(a % 2) ? true : false
// }

// let res = f(9)
// console.log('res = ', res)

// function MyPow (num, pow){
// 	let temp = 1
// 	for (let i = 0; i < pow; i++){
// 		temp *= num
// 	}

// 	return temp
// }

// let res = MyPow(2, 8);
// console.log(res)// 256


// function min(one, two){
// 	return one < two ? one : two;
// }

// let res = min(12, 5);
// console.log(res)
// res = min(6, -3);
// console.log(res)
// res = min(56, 13);
// console.log(res)


// function hello(name){
// 	let hi = 'hello '
// 	return hi + name
// }

// let str = hello('Vasia')
// console.log(str) // 'Hello Vasia'

// let one = 10, two = 20; // global 

// function Change (){
// 	document.write('in func : one = ', one, ', two = ', two, '<br>')
// 	let temp = one; // local
// 	one = two;
// 	two = temp;
// 	document.write('in func : one = ', one, ', two = ', two, '<br>')
// }

// Change()

// document.write('out func : one = ', one, ', two = ', two, '<br>')
// document.write('temp = ', temp)


// function go (a, b){
// 	document.write('a = ', a, ', b = ', b, '<br>');
// }

// go(1)
// go(1, 2)
// go(1, 2, 3)

// let i = 10;


// const sayHi = function (){
// 	for(let i = 0; i < arguments.length; i++){
// 		document.write('Hello ', arguments[i], '<br>')
// 	}
// }

// sayHi(1, 'Max', 'Gora', 'Dobi', 'Some')


// const someFunc = (a, b) => {
// 	console.log('a = ', a, ', b = ', b)
// }

// someFunc(10, 20)


// let cubOne, cubTwo, countPlay = 0, countKonp = 0; 

// const Random = () => {
// 	return Math.floor(Math.random() * 5 + 1)
// }

// const CheakWin = () => {
// 	return countPlay > countKonp ? 'You WIN!!!' : 'You DNO!!!'
// }

// const GameLoop = () => {
// 	for(let i = 0; i < 6; i++){
// 		if(i % 2 == 0){
// 			alert('Ход игрока нажмите Ok для броска ')
// 			cubOne = Random()
// 			cubTwo = Random()
// 			countPlay += cubOne + cubTwo
// 			alert('cub one = ' +  cubOne + ', cub two = ' + cubTwo +  ', Score ' + countPlay)
// 		}else{
// 			alert('Ход II нажмите Ok для броска ')
// 			cubOne = Random()
// 			cubTwo = Random()
// 			countKonp += cubOne + cubTwo
// 			alert('cub one = ' +  cubOne + ', cub two = ' + cubTwo +  ', Score ' + countKonp)
// 		}
// 	}
// }

// const Game = () => {
// 	GameLoop();
// 	CheakWin();
// }

// Game()

// for(let i = 0; i < 5; i++){
// 	console.log(Random())
// }

// function factorial(number){ // number = 1 
// 	if(number !== 1){
// 		//       6 * 5 * 4 * 3 * 2 * 1
// 		return number * factorial(--number)
// 	}else{
// 		return number
// 	}
// }

// console.log(factorial(6))

// function Pow (x, n){
// 	// if(n !== 1){
// 	// 	return x * Pow(x, --n)
// 	// }else{
// 	// 	return x
// 	// }

// 	return n !== 1 ? x * Pow(x, --n) : x;
// }

// console.log(Pow(2, 8))


// function fib(n){
// 	//                        8            7
// 	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// console.log(fib(9))

let el = []

for (let i = 0; i < 3; i++){
    let temp = [] 
    for(let j = 0; j < 3; j++){
        temp[j] = Math.floor(Math.random() * 8)
    }
    el[i] = temp
}

console.log(el)