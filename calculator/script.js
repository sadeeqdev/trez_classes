//Simple javascript calculator

function add(x, y){
    return x + y
}

function divide(x, y){
     return x / y
}

function multiply(x, y){
     return x * y
}

function subtract(x, y){
    return x - y
}


function calculate(x, y, method){
    switch(method){
        case 'add':
            return add(x, y);
        case 'sub':
            return subtract(x, y)
        case 'multiply':
            return multiply(x, y)
        case 'divide':
            return divide(x, y)
    }
}


console.log(calculate(41, 20, 'sub'))