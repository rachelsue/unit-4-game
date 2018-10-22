var crystalNum =[]
var crystalNum1 = Math.floor(Math.random() * 12) + 1;
var crystalNum2 = Math.floor(Math.random() * 12) + 1;
var crystalNum3 = Math.floor(Math.random() * 12) + 1;
var crystalNum4 = Math.floor(Math.random() * 12) + 1;
var randomNum = Math.floor(Math.random() * (120-19)) + 19;
var wins = 0;
var losses = 0;
var totalScore = 0;

$("#wins").text(wins);
$("#losses").text(losses);

$(document).ready(function() {
    $("#randomNum").text(randomNum)
});




// for(var i = 1; i <= 12; i++){
//     crystalArray.push(i);
// }
console.log(crystalNum1);
console.log(crystalNum2);

console.log(randomNumArray);