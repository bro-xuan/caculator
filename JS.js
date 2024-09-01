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
    return a/b;
}

let displayValue='';
let operatorItem=null;
let a='';
let b='';

function returnClickValue() {
    const buttons = document.querySelectorAll(".digits");
    buttons.forEach((button)=>{
        button.addEventListener("click",()=>{
             if (operatorItem===null) {
                a+=button.textContent;
                displayValue=a;
                console.log(a);
             } else {
                b+=button.textContent;
                displayValue=b;  
                console.log(b); 
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
            operatorItem = operator.textContent;
            console.log(operatorItem);
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

})

returnClickValue();
