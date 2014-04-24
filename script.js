var score = 0;
var a = 45;
var b = 10;
var sum = 35;
document.getElementById("a").innerHTML = a;
document.getElementById("b").innerHTML = b;
document.getElementById("sum").innerHTML = sum;

document.getElementById("addition").onclick = function() {
    var answear = a + b;
    
    if(answear == sum){
    document.getElementById("message").innerHTML = "RÄTT :)";
    score = + 1;
    }
    else{
        document.getElementById("message").innerHTML = "FEL :(";
        return;
    }
}

document.getElementById("subtraction").onclick = function() {
    var answear = a - b;
    
    if(answear == sum){
        document.getElementById("message").innerHTML = "RÄTT :)";
        score = + 1;
        document.getElementById("score").innerHTML = "Din poäng är: " + score;
    }
    else{
        document.getElementById("message").innerHTML = "FEL :(";
        return;
    }
}

document.getElementById("multiplication").onclick = function() {
    var answear = a * b;
    
    if(answear == sum){
        document.getElementById("message").innerHTML = "RÄTT :)";
        score = + 1;
    }
    else{
        document.getElementById("message").innerHTML = "FEL :(";
        return;
    }
}
document.getElementById("division").onclick = function() {
    var answear = a / b;
    
    if(answear == sum){
        document.getElementById("message").innerHTML = "RÄTT :)";
        score = + 1;
    }
    else{
        document.getElementById("message").innerHTML = "FEL :(";
        return;
    }
}
document.getElementById("score").innerHTML = "Din poäng är: " + score;



