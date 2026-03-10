// Javascript Conditionals


/* function identify_sign() {
    num1 = document.getElementById('input1').value;

    if(num1 > 0) {
        document.getElementById('output').innerHTML = "The number is positive.";
    } else if(num1 < 0) {
        document.getElementById('output').innerHTML = "The number is negative.";
    } else {
        document.getElementById('output').innerHTML = "The number is zero.";
    }
}*/

function odd_or_even() {
    num1 = document.getElementById('input1').value;

    if(num1 % 2 === 0) {
        document.getElementById('output').innerHTML = "The number is even.";
    } else {
        document.getElementById('output').innerHTML = "The number is odd.";
    }
}