


//Javascript that wraps all - waits for HTML to load before firing:
$(document).ready(function() {

var wins = 0
var losses = 0
var counter = 0



$(".crystal-image").on("click", function() {
	//Adding a counter
	counter += 1;
    // Clicking the button triggers an alert message.
    alert("You clicked a crystal!")
    console.log(counter);
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


