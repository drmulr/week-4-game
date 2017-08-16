
//Javascript that wraps all - waits for HTML to load before firing:
$(document).ready(function() {

	var numWins = 0
	var numLosses = 0
	var counter = 0

	var targetNum = Math.floor(Math.random()*100+20);


	//This function helps create a random value for each crystal.
	function getRandomNum(min, max) {
    	return Math.random() * (max - min) + min;
    }
		var numOne = getRandomNum(1,3);
		var numTwo = getRandomNum(4,8);
		var numThree = getRandomNum(9,12);
		var numFour = getRandomNum(13,15);


console.log("numOne: " + numOne);
console.log("numTwo: "+ numTwo);
console.log("numThree: " + numThree);
console.log("numFour: " + numFour);


	var numOptions = [numOne, numTwo, numThree, numFour];

	//Array of crystal images to choose from:
	var imgArray = new Array(); 
		imgArray[0] = "assets/images/crystal.jpeg";
		imgArray[1] = "assets/images/crystal2.jpeg";
		imgArray[2] = "assets/images/crystal3.jpeg";
		imgArray[3] = "assets/images/crystal4.jpeg";
		imgArray[4] = "assets/images/crystal5.jpeg";
		imgArray[5] = "assets/images/crystal.jpg";

	// var targetNumChg = numOptions[Math.round(Math.random()*numOptions.length)];
	

	function startGame(){
		for (i = 0; i < numOptions.length; i++) {
			var imgCrystal = $("<img>");	
			imgCrystal.addClass("crystal-image").attr("src", imgArray[i]).attr("data-crystalvalue", numOptions[i]); 
			//gives each crystal a value from above array.//MODIFY FOR RANDOM????
			$(".crystalPics").append(imgCrystal);
		}
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
	}

	//reset the values to new random numbers
	function resetGame(){
		counter = 0;
		targetNum = Math.floor(Math.random()*100+20);
		numOne = getRandomNum(1,10);
		numTwo = getRandomNum(6,10);
		numThree = getRandomNum(11,15);
		numFour = getRandomNum(16,20);
	}

	//After win/loss, this resets data:
	function updateDataWinLose() {
		if (targetNum === counter) {
			numWins++;
			alert("You win, way to go!");
			$("#wins").html("Wins: " + numWins);
			resetGame();


		} else if (counter >= targetNum) {
	      	alert("You lost, try again.");
	      	numLosses++;
	      	$("#losses").html("Losses: " + numLosses);	  
	      	resetGame();	
	    }
	}

	startGame();
	updateDataWinLose();




	   

});




