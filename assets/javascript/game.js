var crystalNum =[]
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;
var randomNum = Math.floor(Math.random() * (120-19)) + 19;
var wins = 0;
var losses = 0;
var totalScore = 0;

$("#wins").text(wins);
$("#losses").text(losses);


function crystalGen() {
    crystal1 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
    crystal2 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
    crystal3 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
    crystal4 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
}

function numGen() {
    randomNum = Math.floor(Math.random() * (120 - 19) + 19);
    $("#randomNum").text(randomNum);
}

$("#crystal1").on("click", function(){
    totalScore += crystal1;
    $("#totalScore").text(totalScore);
    reset()
});

$("#crystal2").on("click", function(){
    totalScore += crystal2;
    $("#totalScore").text(totalScore);
    reset()
});

$("#crystal3").on("click", function(){
    totalScore += crystal3;
    $("#totalScore").text(totalScore);
    reset()
});

$("#crystal4").on("click", function(){
    totalScore += crystal4;
    $("#totalScore").text(totalScore);
    reset()
});

function reset(){

	if (totalScore === randomNum){
        wins++;
        totalScore = 0;
        $("#wins").text(wins);
        $("#totalScore").text(totalScore)
        alert("You win!");
        crystalGen();
        numGen(); 
        
    }  
    if (totalScore > randomNum){  
        losses++; 
        totalScore = 0;
        $("#losses").text(losses); 
        $("#totalScore").text(totalScore);
        alert("You LOSE!");
        crystalGen(); 
        numGen(); 
        
	}
}

console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
console.log(randomNum);