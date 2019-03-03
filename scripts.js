var userScore = 0;
var compScore = 0;

const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("computerScore");

const scoreBoard_div = document.querySelector(".scoreBoard");
const resultMessage_div = document.querySelector("resultMessage");

const result_p = document.getElementById("result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scisors_div = document.getElementById("s");

function getComptuerChoice() {
  const Ch = ['r', 'p', 's'];
  return Ch[Math.floor(Math.random() * 3)];
}


function toFullName(name) {
  switch (name) {
    case "r":
      return "rock";
    case "p":
      return "paper";
    case "s":
      return "scissors";
    default:
      return "papaj";
  }
}

function borderChange(firstDivName, firstClass, secondDivName, secondClass, t){
  const fd  = document.getElementById(firstDivName);
  const sd = document.getElementById(secondDivName);
  fd.classList.add(firstClass);
  sd.classList.add(secondClass);
  setTimeout( function(){
    fd.classList.remove(firstClass);
    sd.classList.remove(secondClass);
  }, t)
}

function userWin(userCh, computerCh) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = (toFullName(userCh) + " wins with " + toFullName(computerCh));
  borderChange(userCh, 'divGreenBorderGlow', computerCh, 'divRedBorderGlow', 400);
}

function userLose(userCh, computerCh) {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = (toFullName(userCh) + " loses with " + toFullName(computerCh));
  borderChange(userCh, 'divRedBorderGlow', computerCh, 'divGreenBorderGlow', 400);
}

function draw(userCh, computerCh) {
  result_p.innerHTML = (toFullName(userCh) + " draws with " + toFullName(computerCh));
  borderChange(userCh, 'divGreyBorderGlow', computerCh, 'divGreyBorderGlow', 400);
}

function game(rps) {
  var computerChoice = getComptuerChoice();
  switch (computerChoice + rps) {
    case "rs":
    case "sp":
    case "pr":
      userLose(rps, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      userWin(rps, computerChoice);
      break;
    default:
      draw(rps, computerChoice);
      break;
  }
}


function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  });

  scisors_div.addEventListener('click', function() {
    game("s")
  });
};

main();
