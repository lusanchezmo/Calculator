const input = document.querySelector('h1');
const inputAns = document.querySelector('p');
const Ac = document.querySelector('.ac');
const delet = document.querySelector('.delete');
const cero = document.querySelector('.cero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

let ans = 0;
let operation;
let num;


function putAc() {
    inputAns.innerHTML = '|';
    input.innerHTML = '|';
}


function putCero(){
    if(input.textContent == '|') input.innerHTML = 0;
    else input.innerHTML = input.textContent + 0;
}

function putOne(){
    if(input.textContent == '|') input.innerHTML = 1;
    else input.innerHTML = input.textContent + 1;
}

function putTwo(){
    if(input.textContent == '|') input.innerHTML = 2;
    else input.innerHTML = input.textContent + 2;
}

function putThree(){
    if(input.textContent == '|') input.innerHTML = 3;
    else input.innerHTML = input.textContent + 3;
}

function putFour(){
    if(input.textContent == '|') input.innerHTML = 4;
    else input.innerHTML = input.textContent + 4;
}

function putFive(){
    if(input.textContent == '|') input.innerHTML = 5;
    else input.innerHTML = input.textContent + 5;
}

function putSix(){
    if(input.textContent == '|') input.innerHTML = 6;
    else input.innerHTML = input.textContent + 6;
}

function putSeven(){
    if(input.textContent == '|') input.innerHTML = 7;
    else input.innerHTML = input.textContent + 7;
}

function putEight(){
    if(input.textContent == '|') input.innerHTML = 8;
    else input.innerHTML = input.textContent + 8;
}

function putNine(){
    if(input.textContent == '|') input.innerHTML = 9;
    else input.innerHTML = input.textContent + 9;
}

function putSum(){
    if(input.textContent == '|') {
        input.innerHTML = '+';
        ans = 0;
        operation = '+';
    }
    else {
        if(inputAns.textContent == '|') {
            inputAns.innerHTML = input.textContent + '+';
            ans = input.textContent;
            operation = '+';
            input.innerHTML = '|';
        } else {
            putEqual();
            operation = '+';
            input.innerHTML = '|';
        }
       
    }
}


function putSubtraction(){
    if(input.textContent == '|') {
        input.innerHTML = '-';
        ans = 0;
        operation = '-';
    }
    else {
        if(inputAns.textContent == '|') {
            inputAns.innerHTML = input.textContent + '-';
            ans = input.textContent;
            operation = '-';
            input.innerHTML = '|';
        } else {
            putEqual();
            operation = '-';
            input.innerHTML = '|';
        }
       
    }
}

function putMultiplication(){
    if(input.textContent == '|') {
        input.innerHTML = '*';
        ans = 0;
        operation = '*';
    }
    else {
        if(inputAns.textContent == '|') {
            inputAns.innerHTML = input.textContent + '*';
            ans = input.textContent;
            operation = '*';
            input.innerHTML = '|';
        } else {
            putEqual();
            operation = '*';
            input.innerHTML = '|';
        }
       
    }
}

function putDivision(){
    if(input.textContent == '|') {
        input.innerHTML = '/';
        ans = 0;
        operation = '/';
    }
    else {
        if(inputAns.textContent == '|') {
            inputAns.innerHTML = input.textContent + '/';
            ans = input.textContent;
            operation = '/';
            input.innerHTML = '|';
        } else {
            putEqual();
            operation = '/';
            input.innerHTML = '|';
        }
       
    }
}

function onDelete() {
    let b = input.textContent;
    input.innerHTML = b.substr(0, b.length - 1);
}

function putPoint() {
    input.innerHTML = input.textContent + '.';
}

function putEqual(){
    num = input.textContent;
    
    if(operation == '+'){
        inputAns.innerHTML = inputAns.textContent + input.textContent + '+';
        let a = (parseFloat(ans)+parseFloat(num));
        input.innerHTML = a;
        ans = a;
    }

    if(operation == '-'){
        inputAns.innerHTML = inputAns.textContent + input.textContent + '-';
        let a = (parseFloat(ans)-parseFloat(num));
        input.innerHTML = a;
        ans = a;
    }

    if(operation == '*'){
        inputAns.innerHTML = inputAns.textContent + input.textContent + '*';
        let a = (parseFloat(ans)*parseFloat(num));
        input.innerHTML = a;
        ans = a;
    }

    if(operation == '/'){
        inputAns.innerHTML = inputAns.textContent + input.textContent + '/';
        let a = (parseFloat(ans)/parseFloat(num));
        input.innerHTML = a;
        ans = a;
    }
}

