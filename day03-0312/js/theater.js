'use strict';
//총인원을 입력받고,
//가로열을 입력받아,
//세로로 몇 줄이 될지 계산하는 프로그램

let total_people = prompt("총인원은?");
let width_1 = prompt("가로열은 몇개인가?");
let height_1 = Math.ceil(total_people/width_1);


document.write("세로줄의 수는 "+ height_1 + "입니다.");


//소숫점을 정수로 표현방법
// let a = 3.141592
// document.write(a.toFixed(2));
// document.write(parseInt(a));
// document.write(Math.round(a));

