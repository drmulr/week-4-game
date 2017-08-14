


//Javascript that wraps all - waits for HTML to load before firing:
$(document).ready(function() {

var numWins = 0
var numLosses = 0
var counter = 0

var targetNum = 50;

$("#goalNum").html(targetNum);

//need variables to make crystal values random
var numOptions = [3, 5, 10, 11];

//Array of crystal images to choose from:
var imgArray = new Array(); 
imgArray[0] = "assets/images/crystal6.jpeg";
imgArray[1] = "assets/images/crystal2.jpeg";
imgArray[2] = "assets/images/crystal3.jpeg";
imgArray[3] = "assets/images/crystal4.jpeg";
imgArray[4] = "assets/images/crystal5.jpeg";
imgArray[5] = "assets/images/crystal.jpg";

var targetNumChg = numOptions[Math.round(Math.random())];



function updateDataWinLose() {
	if (targetNum === counter) {
	console.log("Winner winner!");
	numWins++;
	$("#wins").html("Wins: " + numWins);
	counter = "";
	$("#goalNum").html(targetNum); //not sure about this line

	} else if (counter >= targetNum) {
      alert("You lost, try again!!");
      numLosses++;
      $("#losses").html("Losses: " + numLosses);
      counter = "";
      $("#goalNum").html(targetNum);
    }
}



//loops through, creating each crystal
for (i = 0; i < numOptions.length; i++) {
	var imgCrystal = $("<img>");	
	imgCrystal.addClass("crystal-image");
	imgCrystal.attr("src", imgArray[i]);
	//gives each crystal a value from array.
	imgCrystal.attr("data-crystalvalue", numOptions[i]);
	$(".crystalPics").append(imgCrystal);

}

//Click on crystal, get more points!
$(".crystal-image").on("click", function() {	
	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);
	//Adding a counter, increasing by the crystal's value
	counter += crystalValue;
    // Clicking the button triggers an alert message.
    console.log(counter);
    //If the counter increments up to the Target Number = You win!
    updateDataWinLose();



});




//Let's start updating the HTML when we click
$(".crystal-image").on("click", function() {     
    $("#myScoreNum").html(counter);
      });
  

// At End of Game, I need wins to update, losses to update, and the rest to reset:

    



});

// random number generated at start of game

// 4 crystals = each represent a random number (hidden from user)

// When clicked, value of each crystal is added to total score.

// Goal is to match total to whatever random number is generated.

// Need calculate total wins / losses




