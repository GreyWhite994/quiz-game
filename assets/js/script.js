var quizArea = document.getElementById('quiz');
var resultsArea = document.getElementById('results');
var submit = document.getElementById('submit');

var questions = [
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
	}
    {
		question: "What race has a special connection to the Hist Trees ?",
		answers: {
			a: 'Khajiit',
			b: 'Dunmer',
			c: 'Bosmer',
            d: 'Argonians'
		},
		correctAnswer: 'd'
	}
    {
		question: "What is the name of the two moons which appear in the night sky over Tamriel ?",
		answers: {
			a: 'Segundo and Tercer',
			b: 'Almalexia and Sotha Sil',
			c: 'Secunda and Masser',
            d: 'Shor and Kyne'
		},
		correctAnswer: 'c'
	}
    {
		question: "The realm of Oblivion, Moonshadow belongs to which Daedric Prince ?",
		answers: {
			a: 'Azura',
			b: 'Meridia',
			c: 'Malacath',
            d: 'Mehrunes Dagon'
		},
		correctAnswer: 'a'
	}
    {
		question: "What is the capital city of Skyrim ?",
		answers: {
			a: 'Whiterun',
			b: 'Falkreath',
			c: 'Solitude',
            d: 'Windhelm'
		},
		correctAnswer: 'c'
	}
    {
		question: "What is the first month on the Tamrielic calendar ?",
		answers: {
			a: 'Morning Star',
			b: 'First Seed',
			c: "Sun's Dawn",
            d: 'Hearthfire'
		},
		correctAnswer: 'a'
	}
    {
		question: "Who founded the Second Empire of Tamriel ?",
		answers: {
			a: 'Vivec',
			b: 'Saint Alessia',
			c: 'Ysgramor',
            d: 'Reman Cyrodiil'
		},
		correctAnswer: 'd'
	}
    {
		question: "What is the name given to the afterlife of the Nords ?",
		answers: {
			a: 'The Dreamsleeve',
			b: 'The Void',
			c: 'Sovngarde',
            d: 'The Sands Behind the Stars'
		},
		correctAnswer: 'c'
	}
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