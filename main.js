/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
 ********************/

let getRandomNumber = function(max) {
  let rand = Math.random();
  let range = rand * max;
  let result = Math.ceil(range);
  return result;
};

let calculateMean = function(arr) {
  if (arr.length === 0) {
    return "NA";
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (sum / arr.length).toFixed(2);
};

/*******************
 * YOUR CODE BELOW *
 *******************/

// Query UI elements
let d6Roll = document.querySelector("#d6-roll");
let doubleD6Rolls = document.querySelectorAll("#double-d6-roll-1, #double-d6-roll-2");
let d12Roll = document.querySelector("#d12-roll");
let d20Roll = document.querySelector("#d20-roll");
let d6RollsMean = document.querySelector("#d6-rolls-mean");
let doubleD6RollsMean = document.querySelector("#double-d6-rolls-mean");
let d12RollsMean = document.querySelector("#d12-rolls-mean");
let d20RollsMean = document.querySelector("#d20-rolls-mean");
let resetButton = document.querySelector("#reset-button");

// Event listeners
d6Roll.addEventListener("click", rollD6);
doubleD6Rolls.forEach((d6) => d6.addEventListener("click", rollDoubleD6));
d12Roll.addEventListener("click", rollD12);
d20Roll.addEventListener("click", rollD20);
resetButton.addEventListener("click", resetAll);

function rollD6() {
  let d6Roll = document.querySelector("#d6-roll");
  let d6RollsMean = document.querySelector("#d6-rolls-mean");
  let rollResult = getRandomNumber(6);
  d6Roll.src = `./images/d6/${rollResult}.png`;
  sixes.push(rollResult);
  let d6RollsMeanValue = calculateMean(sixes);
  d6RollsMean.textContent = d6RollsMeanValue;
  console.log(`d6 roll: ${rollResult}`);
}

function rollDoubleD6(event) {
  let dice1 = document.querySelector("#double-d6-roll-1");
  let dice2 = document.querySelector("#double-d6-roll-2");
  if (event.target == dice1 || event.target == dice2) {
    let rollResult1 = getRandomNumber(6);
    let rollResult2 = getRandomNumber(6);
    if (event.target == dice1) {
      dice1.src = `./images/d6/${rollResult1}.png`;
      dice2.src = `./images/d6/${rollResult2}.png`;
    } else {
      dice2.src = `./images/d6/${rollResult1}.png`;
      dice1.src = `./images/d6/${rollResult2}.png`;
    }

    doubleSixes.push(rollResult1 + rollResult2);
    let doubleD6RollsMeanValue = calculateMean(doubleSixes);
    doubleD6RollsMean.textContent = doubleD6RollsMeanValue;
    console.log(`double d6 roll: ${rollResult1} + ${rollResult2} = ${rollResult1 + rollResult2}`);
  }
}

function rollD12() {
  let d12Roll = document.querySelector("#d12-roll");
  let rollResult = getRandomNumber(12);
  d12Roll.src = `./images/numbers/${rollResult}.png`;
  twelves.push(rollResult);
  let d12RollsMeanValue = calculateMean(twelves);
  let d12RollsMean = document.querySelector("#d12-rolls-mean");
  d12RollsMean.textContent = d12RollsMeanValue;
  console.log(`d12 roll: ${rollResult}`);
}

function rollD20() {
  let d20Roll = document.querySelector("#d20-roll");
  let rollResult = getRandomNumber(20);
  d20Roll.src = `./images/numbers/${rollResult}.png`;
  twenties.push(rollResult);

  let d20RollsMeanValue = calculateMean(twenties);
  let d20RollsMean = document.querySelector("#d20-rolls-mean");
  d20RollsMean.textContent = d20RollsMeanValue;
  console.log(`d20 roll: ${rollResult}`);
}


function resetAll() {
  let d6Roll = document.querySelector("#d6-roll");
  let doubleD6Rolls = document.querySelectorAll("#double-d6-roll-1, #double-d6-roll-2");
  let d12Roll = document.querySelector("#d12-roll");
  let d20Roll = document.querySelector("#d20-roll");
  let d6RollsMean = document.querySelector("#d6-rolls-mean");
  let doubleD6RollsMean = document.querySelector("#double-d6-rolls-mean");
  let d12RollsMean = document.querySelector("#d12-rolls-mean");
  let d20RollsMean = document.querySelector("#d20-rolls-mean");

  sixes = [];
  doubleSixes = [];
  twelves = [];
  twenties = [];

  d6Roll.src = './images/start/d6.png';
  doubleD6Rolls.forEach(d6 => d6.src = './images/start/d6.png');
  d12Roll.src = './images/start/d12.jpeg';
  d20Roll.src = './images/start/d20.jpg';

  d6RollsMean.textContent = 'NA';
  doubleD6RollsMean.textContent = 'NA';
  d12RollsMean.textContent = 'NA';
  d20RollsMean.textContent = 'NA';
}

resetAll();