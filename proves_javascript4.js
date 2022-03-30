// declaring global variables

let player1 = "Player1";
let player2 = "Player2";

let buttonPressed = false; // answer button pressed. Stops timer if true.
let setBounce = false; // if user sets bounce to on, the question is bounced once, when the time is iver.
let questionNum = 0; // number of the current question.
let totalQuestions = 15; // total of questions chosen is settings.
let players = 2; // number of players.
let subj = 0; // array of subjects chosen for the questions.
let time = 1000; // time for each question, in seconds.
let difficulty = 0;
let bounceDone = false;
let onBounce = false;
let torn = 1; // player asked to answer
let submitPressed = false;
let currentPlayer = player1;
let timer = undefined;
let titleBounce = document.getElementById("titlebounce");
//------------------------------------------------------------------------------------------
// Calling to game function

start(); // hides settings screen, collects settings data and initializes game

//------------------------------------------------------------------------------------------
// declaring game functions

// function called by 'next' button
function next(onBounce) {
  clearTimeout(timer);

  play(
    players,
    totalQuestions,
    time,
    subj,
    difficulty,
    setBounce,
    player1,
    player2,
    currentPlayer,
    onBounce
  );
}

function start() {  // hides settings screen, collects settings data and initializes game

  let button = document.querySelector(".button");

  button.addEventListener("click", () => {
    // when user clicks button, settings window is closed and data is collected.

    document.getElementById("settings").style.display = "none";

    let playersNum = document.getElementsByName("playersNum");
    player1 = currentPlayer = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    let questions = document.getElementsByName("questionsNum");
    let timeset = document.getElementsByName("time");
    let subjlist = document.getElementsByName("subjects");
    let diff = document.getElementsByName("difficulty");
    let getbounce = document.getElementsByName("bounce");

    playersNum[0].checked
     ? (players = 1)
     : (players = 2);

     questions[0].checked
      ? (totalQuestions = 10)
      : questions[1].checked
      ? (totalQuestions = 30)
      : (totalQuestions = 50);

    timeset[0].checked
      ? (time = 4000)
      : timeset[1].checked
      ? (time = 15000)
      : (time = 20000);

    for (let i = 0; i < subjlist.length; i++) {
      if (subjlist[i].checked) {
        subj = i;
      }
    }

    diff[0].checked
      ? (difficulty = 0)
      : diff[1].checked
      ? (difficulty = 1)
      : (difficulty = 2);

    getbounce[0].checked
     ? (setBounce = true)
     : (setBounce = false);

    play(
      players,
      totalQuestions,
      time,
      subj,
      difficulty,
      setBounce,
      player1,
      player2,
      currentPlayer,
      onBounce
    );
  });
}

function play(
  players,
  totalQuestions,
  time,
  subj,
  difficulty,
  setBounce,
  player1,
  player2,
  currentPlayer,
  onBounce
) {

  if (questionNum > 1) {
    getAnswer(); // compares given answer with the correct one.
    score(); // actualizes scores.
  }
  if (questionNum <= totalQuestions) {
    getQuestions();
    displayScreen(torn, currentPlayer, totalQuestions, onBounce);
    timerOn(time); // the timer gets its value from the settings and runs.
    if (players == 2 && onBounce == false) {
      torn = setTorn(torn); // torn shifts when there are two players and it is not bouncing.
    }
  }
}

function getAnswer() {
  score(); // actualizes scores and rates.
}

function score() {}

function getQuestions() {
  //fetch questions
  //display question
}

// display player, number of question, total of questions, and difficulty.
function displayScreen(torn, currentPlayer, totalQuestions, onBounce) {
  if (onBounce == false) {                          // when bouncing the question is not changed, so the other player can have a chance.
    questionNum++;
  }
  if (questionNum > totalQuestions) {
    finish();
    return;
  }

  // set active player
  let titleplayer = document.getElementById("titleplayer");
  titleplayer.innerText = `Player #${torn}, ` + currentPlayer;

  // display 'question #/totalQuestions'
  let questiontitle = document.getElementById("questiontitle");
  questiontitle.innerText =`Question #${questionNum}, out of ` + totalQuestions;

    // display player1's name
  let player1name = document.getElementById("player1name");
  let titles = document.getElementById("titles");
  player1name.innerText = player1;

  // display player2's name
  if (currentPlayer == player2) {
    titles.style.flexDirection = "row-reverse";
  } else {
    titles.style.flexDirection = "row";
  }
  let player2name = document.getElementById("player2name");
  player2name.innerText = player2;

  if (onBounce == false) {
    titleBounce.style.display = "none";
    questiontitle.style.color = "black";
    titleplayer.style.color = "black";
  }
// display points
// display rate
// display progress bar
}

// turn timer on. If it finishes before submitting answer, then bounce.

function timerOn(time) {
  let timer1 = document.getElementById("timer1");
  let timer2 = document.getElementById("timer2");
  let timer3 = document.getElementById("timer3");
  let timer4 = document.getElementById("timer4");
  let timerCounter = 1;

  setinterval(quarter(), (time/4));

  function quarter(){
    
    if (timerCounter == 1){
    timer1.style.color = "rgba(43, 226, 52, 0.2)"
    } else if (timerCounter == 2){
      timer3.style.color = "rgba(255, 99, 9, .4)"
      timer2.style.color = "rgba(255, 99, 9, .4)"
      timer1.style.color = "rgba(255, 99, 9, 1)"
      timer4.style.color = "rgba(255, 99, 9, 1)"
      } else if (timerCounter == 3){
      timer3.style.color = "rgba((226, 64, 43, .4)"
      timer2.style.color = "rgba(226, 64, 43, .4)"
      timer1.style.color = "rgba(226, 64, 43, .4)"
      timer4.style.color = "rgba(226, 64, 43, 1)"
      } else {   
  bouncing();
  }
  // function secondQuarter(){
  //   let timer2 = document.getElementById("timer2");
  //   timer2.style.color = "rgba(43, 226, 52, 0.2)"
  // setTimeout(thirdQuarter(), (time/4));
  // }
  // function thirdQuarter(){

  //   timer3.style.color = "rgba(255, 99, 9, .4)"
  //   timer2.style.color = "rgba(255, 99, 9, .4)"
  //   timer1.style.color = "rgba(255, 99, 9, .4)"
  //   timer4.style.color = "rgba(255, 99, 9, 1)"
  
  }
  timerCounter ++;
}
// set whose torn it is.
function setTorn(torn) {
  if (torn == 1) {
    currentPlayer = player2;
    return 2;
  }
  if (torn == 2) {
    currentPlayer = player1;
    return 1;
  }
}

function bouncing() {
  onBounce = !onBounce;

  // display bounce
  questiontitle.style.color = "red";
  titleplayer.style.color = "red";
  titleBounce.style.display = "flex";
  next(onBounce);
}

function finish() {
  // shows the final scores on another over-screen.
  console.log("Done.");
  clearTimeout(time);
  return;
}
