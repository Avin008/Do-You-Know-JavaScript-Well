let rs = require('readline-sync');
let chalk = require('chalk');

let quiz = [{
  question: "What is the HTML tag under which one can write the JavaScript code? \n a: <javascript> \n b: <scripted> \n c: <script> \n Enter your choice: ",
  answer: "c"
},
{
  question: "Which of the following is the correct syntax to display “Hello World” in an alert box using JavaScript? \n a: alertbox(“Hello World”); \n b: msgbox(“Hello World”); \n c: alert(“Hello World”) \n Enter your Choice: ",
  answer: "c"
},
{
  question: "What is the correct syntax for referring to an external script called “app.js”? \n a: <script src=”app.js”> \n b: <script href=”app.js”> \n c: <script name=”app.js”> \n Enter your Choice: ",
  answer: "a"
},
{
  question: "Which of the following is not a reserved word in JavaScript? \n a: interface \n b: throws \n c: program \n Enter your Choice: ",
  answer: "c"
},
{
  question: "Which function of an Array object calls a function for each element in the array? \n a: forEach() \n b: forEvery() \n c: each() \n Enter your Choice: ",
  answer: "a"
}];

let scoreBoard = [{
  name: "harry",
  score: 25
},
{
  name: "tom",
  score: 20,
},
{
  name: "hermione",
  score: 15
}];



console.log(chalk.bgBlackBright.greenBright("Welcome to javascript Quiz"));
let playerName = rs.question(chalk.cyanBright(" Please enter your name: "));

console.log(chalk.green("\nHi "+ playerName + ". Get ready for some JavaScript quiz \nEnter a/ b/ c for each question. For each correct answer you will get 5 points. Beating the top scores will get you a place on the Score Board. \n"));

// score keeper
let score = 0;

//function to play the game
function play(quest) {
    for (let x = 0; x < quiz.length; x++) {
        let ques = rs.keyIn(chalk.cyanBright(x + 1 + ")", quest[x].question), ({limit: '$<a-c>'}));
        if (quest[x].answer === ques.toLowerCase()) {
            score += 5;
            console.log(chalk.yellowBright.bold("Currect Answer!"));
            console.log(chalk.yellowBright("5 points awarded! \n"));
        } else {
          console.log(chalk.red.bold("Oops!! Wrong Answer"))
            console.log(chalk.green("Currect Answer is: " +  quest[x].answer)+ "\n");
        }
    }
    totalScore();   
}



play(quiz);
updateScore(scoreBoard);
printScoreBoard(scoreBoard);




//function to check & update scores
function updateScore(scores) {
    if (scores[0].score <= score) {
        scores[0].score = score;
        scores[0].name = playerName;
        console.log(chalk.green.bold('Hurray!! you Got the First Place on the scoreBoard. \n'));
    } else if (scores[1].score <= score) {
        scores[1].score = score;
        scores[1].name = playerName;
                console.log(chalk.green.bold('Hurray!! you Got the Second Place on the scoreBoard. \n'));
    } else if (scores[2].score <= score) {
        scores[2].score = score;
        scores[2].name = playerName;
                console.log(chalk.bgBlack.green.bold('Hurray!! you Got the Third Place on the scoreBoard. \n'));
    }else {
      console.log(chalk.bgBlack.green.bold('Sorry!! you Got no place on the scoreBoard. \n'));
    }

   
}

//function to print total score of the player 
function totalScore() {
    console.log(chalk.bold.bgBlack("Hey! " + playerName.toUpperCase() + " Thanks for taking out the time to play the quiz. your Total score is " + score + "/25"));
    console.log("");
}

// function to print the scoreBoard
function printScoreBoard(scores) {
   console.log(chalk.bgYellow("___Top Scores___"));
    scores.forEach((score) => {
        console.log(score.name, score.score);
    })
}


