'use strict'

let height = prompt("당신의 신장은? 예)180");
let ideal_weight = (height - 100) * 0.9;

// document.write("적정체중은 " + ideal_weight + "입니다.");

let result = confirm("적정체중은 " + ideal_weight + "입니다. 계속하시겠습니까?");
if (result) {
    document.write("적정체중입니다.");
} else {
    document.write("적정체중을 위해서 노력하세요.");
}