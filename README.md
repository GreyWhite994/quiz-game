# Elder Scrolls Quiz

The Elder Scrolls Quiz is a site where users can test their knowledge regarding the Elder Scrolls series of video games. 
The site is targeted towards users who are already fans of the series. 

However, there is a link to the wikipedia page for the Elder Scrolls game series for any user who is unfamiliar. The Elder Scrolls Quiz is intended to be a fun game where users can play multiple times 
and get different feedback and images based on their score. 

## Existing Features 
- Navigation Dropdown Menu
    - This responsive menu which drops down when the user hovers contains links to take the user to the quiz and create username sections respectively. Also contains an about link which brings the user to the Elder Scrolls wikipedia page in a new tab.
    - Dropdown design keeps the page looking tidy and not overly cluttered.
<br/>

![Nav Bar](/assets/images/menu_logo.PNG)

<br/>

![Nav Bar Open](/assets/images/menu_open.PNG)

<br/>

- Start Quiz/Rules Section
    - This section explains the rules of the quiz clearly to prospective users so they know exactly how it will function.
    - When the user is ready the quiz itself will appear in this section on the click of start.

![Rules](/assets/images/quiz_section.PNG)

- Create Username Section
    - Allows the user to create a username only allowing for the input of letters.
    - Once the username is entered it will be displayed back to the user in a welcome message.

![Username](/assets/images/username.PNG)

<br/>

![Welcome](/assets/images/welcome.PNG)

- Quiz Section
    - Quiz appears on click of start. The color of the answers will change depending on if you got them correct/incorrect. Also, it will turn oramge if you forgot to answer a question.
    - The full results will not appear unless all questions are answered.

![Quiz](/assets/images/quiz.PNG)

- Results Section
    - Once the quiz is finished and the "Get Results" button is clicked, the user will get their feedback and an image appropriate to their score.
    - A "Start Again" button will then appear if the user would like to reset the results and quiz and start again.

![Result](/assets/images/results.PNG)

## Future Features
- Database
    - In the future the site would benefit from  adding a database in order to add more questions and for the quiz to be randomised every time to add replayability.
    - Also, implementing a scoreboard associated with a username in order to see which user has answered the most questions correctly.
- Comments Section
    - The site would also benefit from a comments section where users could detail their experience of the site and offer feedback.


## Testing 

- I have tested the quiz multiple times in order to ensure everything is working as intended.
- On a desktop screen everything looks and runs perfectly. With only minimal media queries the website lloks perfect on every size screen thanks to its design.
- The navigation bar works as intended and does not contain any broken links. The link to an external site opens in a new tab.
- The start quiz button works as intended and displays the quiz on click. 
- The get results button also works as intended and the user cannot submit the quiz until all questions are answered, therefore not resulting in the quiz being finished early by accident.
- The create username function works as expected and does not allow the user to enter amything but letters to create a username.
- On extremely small screens the background image gets stretched too much so at 730px and down the background image remains fixed in place to prevent this issue.


## Validator Testing
- Html - No errors returned when passing through W3C validator
- CSS - No errors returned when passing through (Jigsaw) validator
- JS - No significant issues found when passing through Jshint

## Unfixed Bugs 
- Unanswered questions in the quiz were intended to all appear orange, however only the first unanswered question the user has missed is highlighted. Because of the way the quiz and the displayResult function were designed it was difficult to fix this without re-designing the project from scratch. The way in which the user answers are checked would have to be re-designed to address this problem.
- Username that is created is only saved to cookies and is deleted on reload of the page. Without having a database I could not find a solution to keeping track of the username. 

## Deployment 

- Site deployed to Github Pages:
    - The steps to deploy are as follows:
    Go to the settings tab on Github repository.
    - Click on Github pages tab on the sidebar, select main branch on the dropdown menu. 
    - Following this, the page will be re-loaded with a detailed ribbon display to indicate it was successful. 
    live link can be found here - https://greywhite994.github.io/quiz-game/

## Credits 
### Content
- Learning how to create and read cookies taken from Stack Overflow (https://stackoverflow.com/questions/4825683/how-do-i-create-and-read-a-value-from-cookie-with-javascript)
- Inspiration for how to structure quiz and answers from Stack Overflow (https://stackoverflow.com/questions/68687270/increment-score-in-a-quiz-game-based-on-selecting-the-right-answers-with-an-obje)
- How to display quiz and check user answers (https://stackoverflow.com/questions/61744369/i-want-to-create-quiz)

### Media
- Free Images taken from [PNGEGG](https://www.pngegg.com/en/search?q=skyrim)