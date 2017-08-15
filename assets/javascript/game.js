


//Javascript that wraps all - waits for HTML to load before firing:
$(document).ready(function() {

	var numWins = 0
	var numLosses = 0
	var counter = 0

	var targetNum = Math.floor(Math.random()*100+20);


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


	//After win/loss, this resets data:
	function updateDataWinLose() {
		if (targetNum === counter) {
			numWins++;
			alert("You win, way to go!");
			counter = 0;
			$("#wins").html("Wins: " + numWins);


		} else if (counter >= targetNum) {
	      	alert("You lost, try again.");
	      	numLosses++;
	      	counter = 0;
	      	$("#losses").html("Losses: " + numLosses);
	      	
	      	
	    }
	}

	//loops through, creating each crystal
	for (i = 0; i < numOptions.length; i++) {
		var imgCrystal = $("<img>");	
		imgCrystal.addClass("crystal-image");
		imgCrystal.attr("src", imgArray[i]);
		//gives each crystal a value from above array.
		imgCrystal.attr("data-crystalvalue", numOptions[i]); //MODIFY FOR RANDOM????
		$(".crystalPics").append(imgCrystal);

	}

	//Click on crystal, get more points!
	$(".crystal-image").on("click", function() {	
		var crystalValue = ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue);
		//Adding a counter, increasing by the crystal's value
		counter += crystalValue;
	    // Clicking the button triggers an alert message.
	    //If the counter increments up to the Target Number = You win!  
	    $("#myScoreNum").html(counter);
	    $("#randNum").html("Random Number: " + targetNum);
	    updateDataWinLose();


	});
	  



  

});




