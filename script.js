var sum;
var score = 0;
var a;
var b;

    //anger själva problemet och slumpar fram talen
function restart() {
   // setTimeout(function(){alert("epic fail")},5000);
    a = Math.floor(Math.random()*100);
    b = Math.floor(Math.random()*100)+1;

    var operators=new Array("+","-","*","/");
    var random = Math.floor(Math.random()*4);
    var op = operators[random];
        switch( op ) {
            case "+":
                sum = a + b;
                sum = Math.round(100*sum)/100;
                break;
            case "-":
                sum = a - b;
                sum = Math.round(100*sum)/100;
                break;
            case "*":
                sum = a * b;
                sum = Math.round(100*sum)/100;
                break;
            case "/":
                sum = a / b;
                sum = Math.round(100*sum)/100;
                break;
            }

    // Skriver ut talen till dokumentet
    document.getElementById("a").innerHTML = a;
    document.getElementById("b").innerHTML = b;
    document.getElementById("sum").innerHTML = sum;
}

// funktion som räknar ut svaret    
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
            restart();
        }
        else{
            document.getElementById("message").innerHTML = "FEL";
            score = 0;
            document.getElementById("")
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
                                                        



