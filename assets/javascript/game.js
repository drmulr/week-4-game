


//Javascript that wraps all - waits for HTML to load before firing:
$(document).ready(function() {

var wins = 0
var losses = 0
var counter = 0

var targetNum = 50



$("#goalNum").text(targetNum);


//need variables to make numbers random
var numOptions = [3, 5, 10, 11];
var targetNumChg = numOptions[Math.round(Math.random())];


//loops through, creating each crystal, depein
for (i = 0; i < numOptions.length; i++) {
	var imgCrystal = $("<img>");	
	imgCrystal.addClass("crystal-image");
	imgCrystal.attr("src", "assets/images/crystal.jpg");
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
    alert("Good click!")
    console.log(counter);
    //If the counter increments up to the Target Number = You win!
	if (targetNum === counter) {
		console.log("Winner winner!");
	} else if (counter >= targetNum) {
      alert("You lost, try again!!");
      counter = "";
    }
});




});

// random number generated at start of game

// 4 crystals = each represent a random number (hidden from user)

// When clicked, value of each crystal is added to total score.

// Goal is to match total to whatever random number is generated.

// Need calculate total wins / losses


//       $(".evil-button").on("click", function() {
//         $(".captain-planet").animate({ top: "50px", left: "-200px"}, "fast").attr('src',"assets/captain_pollution.jpg").animate({ height: "700px" });
//       });


