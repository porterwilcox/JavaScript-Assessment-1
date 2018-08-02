//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

function sum(num1, num2, numStr) {
    let num3;
    switch (numStr) {
        case "8":
            num3 = 8;
            break;
    }
    console.log(num1 + num2 + num3);
}

// sum(num10, one, string8);

function sumBetter(num1, num2, numStr) {
    let num3;
    for (let i = 0; i < 1000; i++) {
        if (i == numStr) {
            num3 = i;
        }
    }
    console.log(num1 + num2 + num3);
}

// sumBetter(num10, one, string8);

//2. write a loop that will log only numbers divisible by 3 between 20 - 100

function divTeam3() {
    for (let i = 20; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

// divTeam3();

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 

function avg(arr) {
   let adder = (acc, cur) => acc + cur;
    console.log(arr.reduce(adder)/scores.length);
}

// avg(scores);