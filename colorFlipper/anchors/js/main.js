// Establish a random colors
const colors = [
  "rgb(255, 0, 106)",
  "rgb(228, 50, 159)",
  "rgb(216, 255, 41)",
  "rgb(66, 179, 245)",
  "rgb(70, 231, 236)",
];

//  get a button from document
const btn = document.getElementById("btn");
// get element by sleector
const color = document.querySelector(".color");

//  put a function on our button
btn.addEventListener("click", function () {
  // asign a function to our variable
  const randomNumber = getRandomNumber();
  


// change style of body element by random item in array 
  document.body.style.backgroundColor = colors[randomNumber];

//   change text by our random value of varible
  color.innerText = colors[randomNumber];
});

// create a randomaizer?
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
