const userChDisplay = document.querySelector(".user-ch");
const compChDisplay = document.querySelector(".comp-ch");
const resultDisplay = document.querySelector(".result");
const button = document.querySelectorAll(".btn");

let compCh;
let userCh;
let result;

button.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    userCh = e.currentTarget.id;
    userChDisplay.innerHTML = userCh;

    compCh = getRandomNumber();
    compChDisplay.innerHTML = compCh;

    resultDisplay.innerHTML = getResult();
  });
});

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function getResult() {
  if (compCh === userCh) {
    return "Draw";
  } else if (compCh === "paper" && userCh === "rock") {
    return "Computer Won";
  } else if (compCh === "rock" && userCh === "scissors") {
    return "Computer Won";
  } else if (compCh === "scissors" && userCh === "paper") {
    return "computer Won";
  } else {
      return 'User Won'
  }
}

//  button.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     userCh = e.currentTarget.id;
//     userChDisplay.innerText = userCh;

//     getResult();
//     getRandomNumber();
//   });
// });

// function getRandomNumber() {
//   const randomNumber = Math.floor(Math.random() * button.length + 1);
//   switch (randomNumber) {
//     case 1:
//       return (compCh = "rock");
//       break;
//     case 2:
//       return (compCh = "paper");
//       break;
//     case 3:
//       return (compCh = "scissors");
//       break;
//   }
//   compChDisplay.innerText = compCh;
// }

// function getResult() {
//   if (compCh === "scissors" && userCh === "paper") {
//     return "Computer Won";
//   } else {
//     return "User Won";
//   }
//   if (compCh === "paper" && userCh === "rock") {
//     return "Computer Won";
//   } else {
//     return "User Won";
//   }

//   if (compCh === "rock" && userCh === "scissors") {
//     return "Computer Won";
//   } else {
//     return "User Won";
//   }

//   result = resultDisplay.innerHTML
