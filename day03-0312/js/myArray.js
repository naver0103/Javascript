'use strict'

let season = ['봄', '여름', '가을', '겨울']
document.write(season[3]);//겨울

const snackBar = ['김밥', '떡볶이', '김말이', '라면']
document.write(snackBar[2]);
document.write(snackBar[0]);

let fruits = [];

fruits.push('사과');
fruits.push('딸기');
fruits.push('배');
fruits.push('수박');
fruits.push('귤');
fruits.push('오렌지');
fruits.push('자몽');
fruits.push('포도');


document.write(fruits);

fruits[0]; //사과
fruits[7]; //포도

let result = fruits.pop();

document.write("<br>" + result);
let result2 = fruits.pop();
document.write("<br>" + result2);
//pop2번 더 하면 fruits에 과일이 몇개
document.write("<br>" + fruits);

const myNumbers = new Array(10);

myNumbers.push(10);
myNumbers[1] = 20;
myNumbers[2] = 20;
myNumbers[3] = 20;
myNumbers[4] = 20;
myNumbers[5] = 20;
myNumbers[6] = 20;
myNumbers[7] = 20;
myNumbers[8] = 20;
myNumbers[9] = 20;


// (3==3)  ==> true
// (3==2) => false
//(4==4) => true
//(4=="4") =>true
//(4==="4") =>false
//(4===4) =>true
//(5===3)  =>false
//(4 != 4) => false











