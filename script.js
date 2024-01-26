// Задача 1

const time = 10;
time === 10 ? console.log(true) : console.log(false);

const prompt1 = prompt();
if (prompt1 === '10'){
  console.log(true);
}else {
  console.log(false);
}

// Задача 2

const myUser = prompt('Введите свой подъезд !!!');

if(myUser === '1'){
  console.log('Ваш подьезд Первый!!! 1 >>> 20 квартиры ');
}else if(myUser === '2'){
  console.log('Ваш подьезд Второй!!! 21 >>> 48 квартиры');
}else if(myUser === '3') {
  console.log('Ваш подьезд Третий!!! 49 >>> 90 квартиры');
}else {
  prompt !== 1, 2, 3;
  console.log('Там нет другого.');
}

const prompt2 = prompt ('Введите свой кабинет');

if(prompt2 >= 1 && prompt2 <= 20) {
  console.log('1 Этаж');
}else if(prompt2 >= 21 && prompt2 <= 48){
  console.log('2 Этаж');
}else if(prompt2 >= 49 && prompt2 <= 90){
  console.log('3 Этаж');
}else{
  console.log(false);
}

const number = 2;

if (number === 1){
  console.log('1, 20');
}else if (number === 2){
  console.log('21, 48');
}else if (number === 3){
  console.log('49, 90');
}else{
  console.log(false);
}

// Задача 3

const nameNumber11 = prompt();

if (nameNumber11 == '5') {
  console.log('true');
}else {
  console.log('false');
}

const number1 = 5;
if (number <= 5){
  console.log(true);
}else{
  console.log(false);
}

// Задача 4 

const san = prompt ();

if(san >= 2 && san <= 11) {
  console.log(true);
}else{
  console.log(false);
}


const br = prompt();

if (br >= 6 && br <= 12 ) {
  console.log(true);
}else{
  console.log(false);
}

// Задача 5

const rftv = ('камень', 'бумага', 'ножницы');

const player1 = prompt('Эрнис');
const player2 = prompt('Нурислам');

if (player1 === player2) {
  console.log('ничья');
}else if(
  (player1 === 'камень' && player2 === 'ножницы')
  (player1 === 'ножницы' && player2 === 'бумага')
  (player1 === 'бумага' && player2 === 'камень')
){
  console.log('Эрнис утту');
}else {
  console.log('Нурислам утту');
}

// Задача 6

let game = prompt("Введите баллы!");
if (game >=0 && game<=49){
  alert("you got the rating 2");
} else if (game >=50 && game<=69){
  alert("you got the rating 3");
} else if (game>=70 && game<=84){
  alert("you got the rating 4");
} else if (game>=85 && game<=100){
  alert("you got the rating 4");
} else {
  alert("Такие баллы нет!!!");
}

//  Баары учун рахмат Ментор байкелер !!!