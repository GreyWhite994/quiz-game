// Get all elements required to run the quiz, results and create username sections

let quizArea = document.getElementById('quiz');
let resultsArea = document.getElementById('results');
let submit = document.getElementById('submit');
let start = document.getElementById("start");
let results_image = document.getElementById('results_image');
let create_username = document.getElementById('form-submit');
let welcome = document.getElementById('welcome-msg');

// Array containing questions and answers, as well as the correct answers for the quiz

let questions = [
	{
		question: "What is the name of the land the Nords originally came from ?",
		answers: {
			a: 'Akavir',
			b: 'Yokuda',
			c: 'Atmora',
            d: 'Elsweyr'
		},
		correctAnswer: 'c'
	},
	{
		question: "Who is the Deadric Prince of Madness ?",
		answers: {
			a: 'Hircine',
			b: 'Sheogorath',
			c: 'Molag Bal',
            d: 'Peryite'
		},
		correctAnswer: 'b'
	},
    {
		question: "What race has a special connection to the Hist Trees ?",
		answers: {
			a: 'Khajiit',
			b: 'Dunmer',
			c: 'Bosmer',
            d: 'Argonians'
		},
		correctAnswer: 'd'
	},
    {
		question: "What is the name of the two moons which appear in the night sky over Tamriel ?",
		answers: {
			a: 'Segundo and Tercer',
			b: 'Almalexia and Sotha Sil',
			c: 'Secunda and Masser',
            d: 'Shor and Kyne'
		},
		correctAnswer: 'c'
	},
    {
		question: "The realm of Oblivion, Moonshadow belongs to which Daedric Prince ?",
		answers: {
			a: 'Azura',
			b: 'Meridia',
			c: 'Malacath',
            d: 'Mehrunes Dagon'
		},
		correctAnswer: 'a'
	},
    {
		question: "What is the capital city of Skyrim ?",
		answers: {
			a: 'Whiterun',
			b: 'Falkreath',
			c: 'Solitude',
            d: 'Windhelm'
		},
		correctAnswer: 'c'
	},
    {
		question: "What is the first month on the Tamrielic calendar ?",
		answers: {
			a: 'Morning Star',
			b: 'First Seed',
			c: "Sun's Dawn",
            d: 'Hearthfire'
		},
		correctAnswer: 'a'
	},
    {
		question: "Who founded the Second Empire of Tamriel ?",
		answers: {
			a: 'Vivec',
			b: 'Saint Alessia',
			c: 'Ysgramor',
            d: 'Reman Cyrodiil'
		},
		correctAnswer: 'd'
	},
    {
		question: "What is the name given to the afterlife of the Nords ?",
		answers: {
			a: 'The Dreamsleeve',
			b: 'The Void',
			c: 'Sovngarde',
            d: 'The Sands Behind the Stars'
		},
		correctAnswer: 'c'
	},
    {
		question: "What is the Argonian native language ?",
		answers: {
			a: 'Nedic',
			b: 'Jel',
			c: 'Akaviri',
            d: 'Ehlnofex'
		},
		correctAnswer: 'b'
	}
];

/**
 * Displays quiz and answers, is called on click of start.
 * Iterates through question array, puts questions and answers in quiz array and answers array respectively.
 * Joins them together and displays in quizArea.
 */

function displayQuiz(questions, quizArea) {
	let quiz = [];
	let qNumber = 0;

	for (let i=0; i<questions.length; i++) {
		qNumber = qNumber+1;
		let answers=[];

		for(letter in questions[i].answers) {
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		quiz.push(
			'<div class="question">' + qNumber + '. ' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
		}
		quizArea.innerHTML = quiz.join('');
		
	}
	
/**
 * Displays results of quiz, is called on click of submit.
 * Takes userAnswer and compares it to correct answer as per questions array.
 * If correct, numCorrect increments and answer becomes green.
 * Otherwise, answer becomes red.
 * Questions not answered are highlighted in orange, full results are not displayed if there is an unanswered question.
 * Different result and image shown depending on score out of the quiz length.
 * Replay on click will wipe results section and reset quiz.
 */

function displayResults(questions, quizArea, resultsArea) {

	let containAnswers = quizArea.querySelectorAll('.answers');
	let userAnswer = '';
	let numCorrect = 0;
	let notAnswered = 0;

	for(let i=0; i<questions.length; i++) {
		userAnswer = (containAnswers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		

		if (userAnswer===undefined) {
			alert("Please answer all the questions!")
			containAnswers[i].style.color = 'orange';
			notAnswered+=1
			break;
		}
		else if(userAnswer===questions[i].correctAnswer){
			
			numCorrect++;
			
			containAnswers[i].style.color = 'lightgreen';
		}
		else{
			containAnswers[i].style.color = 'red';
		}
	}
	
	if (notAnswered===0) {
		if (numCorrect >= 8){
			results_image.innerHTML = '<img id=score_image src=assets/images/todd.png alt=score_image></img>'
			resultsArea.innerHTML = 'Well done! You got ' + numCorrect + ' out of ' + questions.length + ', Todd Howard would be proud' + '<br></br>' + '<button id="replay" class="btn"S>Start Again?</Button>';
			}
		else if (numCorrect >=6){
			results_image.innerHTML = '<img id=score_image src=assets/images/alduin.png alt=score_image></img>'
			resultsArea.innerHTML = 'Good job! You got ' + numCorrect + ' out of ' + questions.length + ', keep trying to improve your Elder Scrolls knowledge' + '<br></br>' + '<button id="replay" class="btn">Start Again?</Button>';
			}
		else if (numCorrect >=4) {
			results_image.innerHTML = '<img id=score_image src=assets/images/oblivion.png alt=score_image></img>'
			resultsArea.innerHTML = 'Ouch, you only got ' + numCorrect + ' out of ' + questions.length + ', you deserve to be sent to Oblivion' + '<br></br>' + '<button id="replay" class="btn">Start Again?</Button>';
		}
		else if (numCorrect >=2) {
			results_image.innerHTML = '<img id=score_image src=assets/images/db.png alt=score_image></img>'
			resultsArea.innerHTML = "I can't believe you only got " + numCorrect + ' out of ' + questions.length + ", I'm sending the Dark Brotherhood after you!" + '<br></br>' + '<button id="replay" class="btn">Start Again?</Button>';
		}
		else if (numCorrect >=0) {
			results_image.innerHTML = '<img id=score_image src=assets/images/giant.png alt=score_image></img>'
			resultsArea.innerHTML = "This couldn't be worse, you got " + numCorrect + ' out of ' + questions.length + ", you know about as much as a frost giant!" + '<br></br>' + '<button id="replay" class="btn">Start Again?</Button>';
		}
	}
	let replay = document.getElementById("replay");

	replay.onclick = function replayQuiz() {
		resultsArea.innerHTML = '';
		results_image.innerHTML='';
		startQuiz()
	}

	}
/**
 * Function to start the quiz which displays the quiz and allows user
 * to display their results on click of submit.
 */
function startQuiz() {
	displayQuiz(questions, quizArea);
	submit.onclick = function(){
		displayResults(questions, quizArea, resultsArea);
	}
}
// On click of start, the startQuiz function will be called
start.onclick = function(){
	startQuiz()
}

// Allows user to create a username which will display back to them in a welcome message
// Functions createCookie and getCookie taken from StackOverflow with slight modifications, https://stackoverflow.com/questions/4825683/how-do-i-create-and-read-a-value-from-cookie-with-javascript
/**
 * Takes a name and value parameter and data is saved as a cookie
 */
function createCookie(name, value) {
	document.cookie = name + '=' + value;
}
/**
 * Splits cookies, iterates through them and returns specified cookie.
 */
function getCookie(name) {
	name = name + '=';
	let cookies =document.cookie.split(';');
	for(let i=0; i<cookies.length; i++) {
		let cookie = cookies[i];
		while (cookie.charAt(0)==' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) == 0) {
			return cookie.substring(name.length,cookie.length);
		}
	}
	return "";
}

/** 
 * On click of create_username the value entered into username-field is taken and put into variable user
 * identifier and user are passed to createCookie
 * userName equals the return value of getCookie which is the value entered by the user
 * A welcome message is displayed to the user with their chosen name
*/
create_username.onclick = function() {
	let user = document.getElementById("username-field").value;
	let identifier = "username"
	createCookie(identifier, user);
	userName = getCookie(identifier);
	if (userName === "") {
		return;
	}
	else {
		welcome.innerHTML = 'Hello ' + userName + ', welcome to the Elder Scrolls Quiz!'
	}    
}
