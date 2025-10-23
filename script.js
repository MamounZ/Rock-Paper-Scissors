let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
	let arr = ["rock", "paper", "scissors"];
	let num = Math.random();
	if (num >= 0 && num < 0.3)
		return (arr[0]);
	else if (num >= 0.3 && num < 0.6)
		return (arr[1]);
	else if (num >= 0.6 && num <= 1)
		return (arr[2]);
}

function getHumanChoice(){
	let arr = ["rock", "paper", "scissors"];
	let choise = prompt("rock, paper or scissors\n choose wisely").toLowerCase();
	if (arr.includes(choise))
		return (choise);
	else
		return ("none");
}

function playRound(){
	let humanchoice = getHumanChoice();
	let computerchoice = getComputerChoice();

	if (humanchoice == "rock")
		if (computerchoice == "paper")
			computerScore++;
		else if (computerchoice == "scissors")
			humanScore++;
	else if (humanchoice == "paper")
		if (computerchoice == "scissors")
			computerScore++;
		else if (computerchoice == "rock")
			humanScore++;
	else if (humanchoice == "scissors")
		if (computerchoice == "rock")
			computerScore++;
		else if (computerchoice == "paper")
			humanScore++;
}

function playGame(){
	console.log(humanScore);
	console.log(computerScore);
	for(let i = 0; i < 5; i++)
		playRound()
	if (humanScore > computerScore)
		console.log("human wins")
	else if (humanScore < computerScore)
		console.log("computer wins");
	else
		console.log("tie")
	console.log(humanScore);
	console.log(computerScore);
}

playGame();
