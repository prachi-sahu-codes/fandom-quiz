let readlineSync = require("readline-sync");

let quizQuestion = [
  {
    question:
      "(1.) Which one is the smallest ocean in the world?\n(a) Indian \n(b) Pacific \n(c) Atlantic \n(d) Arctic\n",
    answer: "D",
  },
  {
    question:
      "(2.) In which ocean 'Bermuda Triangle' region is located?\n(a) Indian \n(b) Pacific \n(c) Atlantic \n(d) Arctic\n",
    answer: "c",
  },
  {
    question:
      "(3.) Which country is known as the 'Land of Thunderbolts'?\n(a) China \n(b) Japan \n(c) Bhutan \n(d) Thailand\n",
    answer: "c",
  },
  {
    question:
      "(4.) Which country is known as the 'Land of Rising Sun'?\n(a) Japan \n(b) New Zealand \n(c) Fiji \n(d) China\n",
    answer: "a",
  },
  {
    question:
      "(5.) In which country, white elephant is found?\n(a) India \n(b) Sri Lanka \n(c) Thailand \n(d) Malaysia\n",
    answer: "c",
  },
  {
    question:
      "(6.) Which one is the smallest ocean in the world?\n(a) Indian \n(b) Pacific \n(c) Atlantic \n(d) Arctic\n",
    answer: "D",
  },
  {
    question:
      "(7.) In which ocean 'Bermuda Triangle' region is located?\n(a) Indian \n(b) Pacific \n(c) Atlantic \n(d) Arctic\n",
    answer: "c",
  },
  {
    question:
      "(8.) Which country is known as the 'Land of Thunderbolts'?\n(a) China \n(b) Japan \n(c) Bhutan \n(d) Thailand\n",
    answer: "c",
  },
  {
    question:
      "(9.) Which country is known as the 'Land of Rising Sun'?\n(a) Japan \n(b) New Zealand \n(c) Fiji \n(d) China\n",
    answer: "a",
  },
  {
    question:
      "(10.) In which country, white elephant is found?\n(a) India \n(b) Sri Lanka \n(c) Thailand \n(d) Malaysia\n",
    answer: "c",
  },
];

let highScores = [
  {
    name: "Prachi",
    score: 10,
  },

  {
    name: "Purvi",
    score: 9,
  },
];

let score = 0;

function welcome() {
  let username = readlineSync.question("What's your name ? ");
  console.log("welcome " + username + "!!! \n");
  console.log(
    "Lets play an interesting quiz. Each correct answer will increase your score by 1 and according to your scores you'll be decided as which Tier player you are.\n"
  );
}

welcome();

function play(question, answer) {
  let useranswer = readlineSync.question(question);

  if (useranswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are correct");
    score++;
  } else {
    console.log("You are wrong");
  }

  console.log("your score is : " + score);
  console.log("------------------");
}

function quiz() {
  for (let i = 0; i < quizQuestion.length; i++) {
    let currentQuestion = quizQuestion[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function endScores() {
  console.log(
    "Wohooo!!! you've just completed this awesome quiz and your score is " +
      score
  );

  if (score > 8) {
    console.log("Congratulations!! You're Tier-1 player!!\n");
  } else if (score > 6) {
    console.log("Hurray!! You're Tier-2 player!!\n");
  } else if (score > 4) {
    console.log("Hurray!! You're Tier-3 player!!\n");
  } else {
    console.log("You need to work hard!!\n");
  }

  console.log(
    "Check out the high scores, if you're Tier-1 player and scored higher than others ping me the screenshot and I'll update it.\n"
  );

  highScores.forEach(function (currentplayer) {
    console.log(currentplayer.name, " : ", currentplayer.score);
  });
}

quiz();
endScores();
