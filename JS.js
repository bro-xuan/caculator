function addition(a,b) {
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function multiple(a,b){
    return a*b;
}
function divide(a,b){
    if (b === 0) {
        return "Nice try, but you can't divide by zero!";
    }
    return a/b;
}

let displayValue='';
let operatorItem=null;
let a='';
let b='';
let result = null;

function returnClickValue() {
    const buttons = document.querySelectorAll(".digits");
    buttons.forEach((button)=>{
        button.addEventListener("click",()=>{
             if (operatorItem===null) {
                a+=button.textContent;
                displayValue=a;
                console.log("a:",a);
             } else {
                b+=button.textContent;
                displayValue=b;  
                console.log("b:",b); 
            }
            updateDisplay();
        })
    })
}

function updateDisplay(){
    display = document.querySelector("#display");
    display.textContent=displayValue;
}

const operators = document.querySelectorAll(".operator");
operators.forEach((operator)=>{
    operator.addEventListener("click",()=>{
        if (a!==''){
            if (b!=='') {
                a=String(operate(a,b,operatorItem));
                displayValue=a;
                result=a;
                b='';
                updateDisplay();
            } 
            operatorItem = operator.textContent;
            console.log(operatorItem);
        } else {
            displayValue = "Please enter a number first!";
            updateDisplay();
        }
    });
});

function operate(a,b,operatorItem) {
    if (operatorItem==='+') return addition(parseFloat(a),parseFloat(b));
    if (operatorItem==='-') return subtraction(parseFloat(a),parseFloat(b));
    if (operatorItem==='*') return multiple(parseFloat(a),parseFloat(b));
    if (operatorItem==='/') return divide(parseFloat(a),parseFloat(b));
}

const equal = document.querySelector("#equal");
equal.addEventListener("click",()=>{
    displayValue = String(operate(a,b,operatorItem));
    updateDisplay();
    console.log('=');
    console.log(displayValue);
    result=displayValue;
    a=result;
    b='';
    operatorItem=null;
})

const clear = document.querySelector("#clear");
clear.addEventListener("click", ()=>{
    displayValue='0';
    operatorItem=null;
    a='';
    b='';
    result = null;
    updateDisplay();
})

returnClickValue();
