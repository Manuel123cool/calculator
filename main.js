"use strict";

let c = document.getElementById("calculator");
let ctx = c.getContext("2d");

function drawRectBorder(xPos, yPos, width, height) {
    ctx.moveTo(xPos, yPos);
    ctx.lineTo(xPos + width, yPos);
    
    ctx.moveTo(xPos, yPos);
    ctx.lineTo(xPos, yPos + height);

    ctx.moveTo(xPos, yPos + height);
    ctx.lineTo(xPos + width, yPos + height);

    ctx.moveTo(xPos + width, yPos);
    ctx.lineTo(xPos + width, yPos + height);
}

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
        return;
    }
            
    if (text.substring(0, 5) == "Digit") {
        secondDigits += text.charAt(5);
    } 
     
    switch (text) {
        case "NumpadDivide":
            operator = "/";
            break;
        case "NumpadMultiply":
            operator = "*";
            break;
        case "NumpadAdd":
            operator = "+";
            break;
        case "NumpadSubtract":
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

drawRectBorder(5, 5, 390, 60);

window.addEventListener("keypress", keyPressEvent);

ctx.stroke();
