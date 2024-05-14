'use strict';


//숫자 변수 초기화
let data1 = 0;
//문자 변수 초기화
let data2 = "";
//불린 변수 초기화
let data3 = false
//객체 변수 초기화
let data4 = null;



data4  = new Date(); //data4는 실제 데이터가 들어 있는 데이터의 주소를
                        //가리키는 값이 담겨있음.
// let year2 = data4.getFullyear(); //실제 데이터중에는 년도의 값이 들어 있어서 제공하는 
//                                  //연도의 값을 얻어왔음.
// document.write(year);//년도의 값을 얻어왔음.
let day2 = data4.getDay();
document.write(day2);

const data5 = new Date();
const PI = 3.141592;//안변하는 값, 상수의 영우 const를 붙여서 변경되지 않도록 지정

//<h1>태그 활용</h1>
//<h1>2024-03-11 15:20</h1>

let dayNtime = new Date();
let year = dayNtime.getFullYear();
let month = dayNtime.getMonth()+1;
let day = dayNtime.getDate();//요일. 0요일 1월요일//switch하고 난 후 하자.
let hour = dayNtime.getHours();
let minutes = dayNtime.getMinutes();

document.write(dayNtime);
document.write(year);
document.write(month);
document.write(day);
document.write(hour);
document.write(minutes);

document.write("<h1>"+year+"-"+month+"-"+day+"&nbsp;&nbsp;"+ hour+":"+minutes+"</h1>")


