const friuts = ["Mango", "Orange", "Apple", "Banana", "Melon"]

const myNumbers = [12, 45, 11, 78, 99];

const loginUsername = "abubakar";

// for(let i = 0; i < myNumbers.length; i++){
//     console.log(myNumbers[i]);
// }

// function checkDetails(){
//     const newNumber = [90, 889, 12323]
//     console.log("My numbers", myNewNumber)
//     if(true){
//         const myNewNumber = 45
//         console.log(myNewNumber)
//     }
// }

// console.log(newNumber)

// checkDetails()

// if(loginUsername != "Sadeeq"){
//     console.log("Username is correct")
// }else if(myNumbers.length > 7){
//     console.log("Numbers are greater than 7")
// }else if(myNumbers.length < 7){
//     console.log("Numbers are less than 7")
// }else{
//     console.log("No conditions are met")
// }

// switch(loginUsername){
//     case "abubakar":
//         console.log("Incorrect");
//         break;
//     case "Sadeeq": 
//         console.log("Correct");
//         break;
//     case "Sadeeq": 
//         console.log("Correct");
//         break;
//     case "Sadeeq": 
//         console.log("Correct");
//         break;
//     case "Sadeeq": 
//         console.log("Correct");
//         break;
//     case "Sadeeq": 
//         console.log("Correct");
//         break;
//     default:
//         console.log("None of the conditions are met")
// }

function countNumbers(){
    for(let i=0; i<=100; i++){
        console.log(i)
    }
}

function printLetters(letters, countMyNumbers) {
    for(let i=0; i<letters.length; i++){
        console.log(letters[i])
    }

    function printFruits(){
        let friuts = ["apple", "banana"]
        console.log(friuts)
    }
    countMyNumbers()

    console.log(numbers)
}

let myLetters = ["a", "b", "c", "d", "e"]
const numbers = [12, 45, 11, 78, 99];

function pureFunctionExample() {
    if(confirm("Hello world")){
        console.log("Action confirmed")
    }
}

let callChangeValue = {
    changeValue (){
       console.log(arguments)
    }
}

// countNumbers()
// printLetters(myLetters, countNumbers)
// pureFunctionExample()
callChangeValue.changeValue([1,2,4,5,6])

