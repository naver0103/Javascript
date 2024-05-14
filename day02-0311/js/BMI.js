'use strict';

//사용자에게 키(단위:m) 값과 체중을 입력 받는다. prompt
//bmi = 체중/ 키*키
//bmi 를 출력해주세요.
//18.5~23 정상
//23~25.00 과체중범위

let temp;//변수 선언
//값 할당되어야함.
alert(temp);
/*
null 테스트
예제 09 : null 값으로 데이터를 초기화 하는 경우
*/

//숫자 변수 초기화
let data1 = 0;
//문자 변수 초기화
let data2 = "";
//불린 변수 초기화
let data3 = false
//객체 변수 초기화
let data4 = null;


let height_1 = prompt("키는?");
let weight_1 = prompt("몸무게는?");

let BMI = weight_1 / (height_1 * height_1);
alert("BMI지수는 " + BMI + "입니다.");
document.write(BMI);





