let quizArea = document.getElementById('quiz');
let resultsArea = document.getElementById('results');
let submit = document.getElementById('submit');
let start = document.getElementById("start");
let results_image = document.getElementById("results_image");

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

function displayQuiz(questions, quizArea) {
	let quiz = [];

	for (let i=0; i<questions.length; i++) {

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
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
		}
		quizArea.innerHTML = quiz.join('');
	}	

function displayResults(questions, quizArea, resultsArea) {

	let containAnswers = quizArea.querySelectorAll('.answers');
	let userAnswer = '';
	let numCorrect = 0;

	for(let i=0; i<questions.length; i++) {

		userAnswer = (containAnswers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

		if(userAnswer===questions[i].correctAnswer){
			
			numCorrect++;
			
			containAnswers[i].style.color = 'lightgreen';
		}
		
		else{
			containAnswers[i].style.color = 'red';
		}
	}

	if (numCorrect >= 8){
		results_image.innerHTML = '<img id=score_image src=assets/images/todd.png alt=score_image></img>'
		resultsArea.innerHTML = 'Well done! You got ' + numCorrect + ' out of ' + questions.length + ', Todd Howard would be proud' + '<br></br>' + '<button id="replay">Start Again?</Button>';
		}
	else if (numCorrect >=6){
		results_image.innerHTML = '<img id=score_image src=assets/images/alduin.png alt=score_image></img>'
		resultsArea.innerHTML = 'Good job! You got ' + numCorrect + ' out of ' + questions.length + ', keep trying to improve your Elder Scrolls knowledge' + '<br></br>' + '<button id="replay">Start Again?</Button>';
		}
	else if (numCorrect >=4) {
		results_image.innerHTML = '<img id=score_image src=assets/images/oblivion.png alt=score_image></img>'
		resultsArea.innerHTML = 'Ouch, you only got ' + numCorrect + ' out of ' + questions.length + ', you deserve to be sent to Oblivion' + '<br></br>' + '<button id="replay">Start Again?</Button>';
	}
	else if (numCorrect >=2) {
		results_image.innerHTML = '<img id=score_image src=assets/images/db.png alt=score_image></img>'
		resultsArea.innerHTML = "I can't believe you only got " + numCorrect + ' out of ' + questions.length + ", I'm sending the Dark Brotherhood after you!" + '<br></br>' + '<button id="replay">Start Again?</Button>';
	}
	else if (numCorrect >=0) {
		results_image.innerHTML = '<img id=score_image src=assets/images/giant.png alt=score_image></img>'
		resultsArea.innerHTML = "This couldn't be worse, you got " + numCorrect + ' out of ' + questions.length + ", you know about as much as a frost giant!" + '<br></br>' + '<button id="replay">Start Again?</Button>';
	}

	let replay = document.getElementById("replay");
	replay.onclick = function() {
		resultsArea.innerHTML = '';
		results_image.innerHTML=''
		startQuiz()
	}

	}

function startQuiz() {
	displayQuiz(questions, quizArea);
	submit.onclick = function(){
		displayResults(questions, quizArea, resultsArea);
	}
}

start.onclick = function() {
	startQuiz()
}