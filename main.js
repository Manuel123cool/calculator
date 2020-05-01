"use strict";

let c = document.getElementById("calculator");
let ctx = c.getContext("2d");

function drawText(text) {
    ctx.clearRect(6, 6, 389, 59);
    ctx.font = "30px Arial";
    ctx.fillText(text, 10, 45);
}

let firstDigits = "";
let secondDigits = "";
let operator = "";
let enterSecondTime = false;

function calculator(text) {
    console.log(text);
    if (text.substring(0, 5) == "Digit" && operator != "") {
        firstDigits += text.charAt(5); 
        drawText(firstDigits);
        return;
    }
            
    if (text.substring(0, 5) == "Digit") {
        secondDigits += text.charAt(5);
        drawText(secondDigits);
    } 
     
    switch (text) {
        case "KeyD":
            operator = "/";
            break;
        case "KeyM":
            operator = "*";
            break;
        case "KeyA":
            operator = "+";
            break;
        case "KeyS":
            operator = "-";
            break;
    }
    if (text == "Enter") {
        if (enterSecondTime) {
            secondDigits = "";
            operator = "";
            firstDigits = "";
            drawText("0");
            enterSecondTime = false;
        }
        switch (operator) {
            case "*":
                drawText(firstDigits * secondDigits);
                enterSecondTime = true;
                break;
            case "/":
                drawText(firstDigits / secondDigits);
                enterSecondTime = true;
                break;
            case "+":
                drawText(Number(firstDigits) + Number(secondDigits));
                enterSecondTime = true;
                break;
            case "-":
                drawText(secondDigits - firstDigits);
                enterSecondTime = true;
                break;
        }
    }
}

function calcText(text) {
    calculator(text);
}

function keyPressEvent(e) {
    calcText(e.code, false);
}

ctx.strokeRect(5, 5, 390, 60);

window.addEventListener("keypress", keyPressEvent)
