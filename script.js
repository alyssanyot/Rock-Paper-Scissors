let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'assets/rock.png';

imgArray[1] = new Image();
imgArray[1].src = 'assets/paper.png';

imgArray[2] = new Image();
imgArray[2].src = 'assets/scissors.png';


function selectCompChoice(){
	let randChoice = Math.floor(Math.random()*3);

	return randChoice;
}

function checkResult(userChoice){
	let compChoice = selectCompChoice();
	let resultElement = document.getElementById('result');
	//Win
	if((userChoice == 0 && compChoice == 2) || (userChoice == 1 && compChoice == 0) || (userChoice == 2 && compChoice == 1)){
		resultElement.innerHTML = "You Win!";
	}
	//Lose
	else if((userChoice == 0 && compChoice == 1) || (userChoice == 1 && compChoice == 2) || (userChoice == 2 && compChoice == 0)){
		resultElement.innerHTML = "You Lose!";
	}
	//Tie
	else{
		resultElement.innerHTML = "It's a Tie!";
	}
	console.log(userChoice, compChoice);
	displayChoices(userChoice, compChoice);
}

function displayChoices(player, computer){

	document.getElementById('playerChoice').src = imgArray[player].src;
	document.getElementById('computerChoice').src = imgArray[computer].src;
}