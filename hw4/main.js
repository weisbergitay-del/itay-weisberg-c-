import {add,subtract,multiply,divide} from './functions.js';



let a = Number(prompt("הכנס מספר"));
let b = Number(prompt("הכנס מספר"));
let c = prompt("הכנס פעולה חשבונית");

switch(c){
case "+":
    alert(add(a,b));
    case "-":
    alert(subtract(a,b));
    break;
    case "*":
    alert(multiply(a,b));
    break;
    case "/":
    alert(divide(a,b));
    break;
    default:
     alert("לא פעולה חשבונית");
}