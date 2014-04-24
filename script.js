var sum;
var score = 0;
var a = Math.floor(Math.random()*10)+1;
var b = Math.floor(Math.random()*10)+1;

var operators=new Array("+","-","*","/");
var random = Math.floor(Math.random()*3)+1;
var op = operators[random];
        switch( op ) {
            case "+":
                sum = a + b;
                break;
            case "-":
                sum = a - b;
                break;
            case "*":
                sum = a * b;            
                break;
            case "/":
                sum = a / b;
                break;
            }

document.getElementById("a").innerHTML = a;
document.getElementById("b").innerHTML = b;
document.getElementById("sum").innerHTML = sum;

function calculate( operator ) {
        var answer;
        switch( operator ) {
            case "+":
                answer = a + b;
                break;
            case "-":
                answer = a - b;
                break;
            case "*":
                answer = a * b;            
                break;
            case "/":
                answer = a / b;
                break;
            }
        if(answer == sum){
            document.getElementById("message").innerHTML = "RÄTT";
            score += 1;
        }
        else{
            document.getElementById("message").innerHTML = "FEL";
            score = 0;
            }
        document.getElementById("score").innerHTML = "Din poäng är: " + score;   
    }

document.getElementById("addition").onclick = function() {
    calculate("+");
};
document.getElementById("subtraction").onclick = function() {
    calculate("-");
};
document.getElementById("multiplication").onclick = function() {
    calculate("*");
};
document.getElementById("division").onclick = function() {
    calculate("/");
};
                                                        



