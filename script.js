
// function doIt (a, b, c = 9) {
//   console.log('sdfsdfsdf');

// }


// const logger= function () {
// console.log('logger')
// }
// doIt(1, 2);

// const alerter = ()=> alert('qo')
// alerter(

// console.log(doIt(1,2) + 100);
// const smth = 'ba' + +'s' + 'a'
// console.log(smth.toLocaleLowerCase());
// console.log( Boolean('d'));

// console.log(!!!1);

// const valera = +prompt("Enter first number");
// const secValera = +prompt('Enter secon numbeer');
// const summValer = valera + secValera;
// console.log('sumVal', summValer);
// if (!isNaN(summValer) && summValer>10 ) {
//   alert (`More than 10 ${summValer}`);
// } if  (!isNaN(summValer) && summValer <10) {
//   alert(`Less than 10 ${summValer}`);
// } if (isNaN(summValer)){
//   alert("Enter a some number, pls");
// }

// while (condition) {
//   // код
//   // также называемый "телом цикла"
// }
// let countNumber = 60;

// while (countNumber<=5){
//   console.log(countNumber);
//   countNumber++ 
// }

// home work
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

let total = 0;
let input;

do{
  input = prompt("Enter number");
  let inputNumber =+ input;

  if (isNaN(inputNumber)){
    alert("you enter not a number, enter a number pls");
  } else {
    total += inputNumber;
  }


}
while (input !== null);

alert(`Общая сумма чисел равна ${total}`);

