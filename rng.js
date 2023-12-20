// Get min and max inputs
let minInput = document.getElementById('min');
let maxInput = document.getElementById('max');

// Get generate button and result elements
const generateBtn = document.getElementById('generate-button');
const result = document.getElementById('result');

// Clear inputs on page load
minInput.value = '1';
maxInput.value = '10';

// Generates a random number between the min and max ranges when pressed
generateBtn.addEventListener('click', generateRandom);

// Generates a random number when called
function generateRandom() {
  // Store inputs as numbers
  let min = Number(minInput.value);
  let max = Number(maxInput.value);

  // If either inputs are blank or NaN, return
  if (min === '' || max === '') {
    minInput.value = '';
    maxInput.value = '';
    return;
  }

  // If min > max, switch values and update input forms
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;

    minInput.value = min;
    maxInput.value = max;
  }

  // Converts decimals into whole numbers if there are any
  min = Math.floor(min);
  max = Math.ceil(max);

  // Generates random number
  const randNum = Math.floor(Math.random() * (max - min + 1) + min);

  // Updates result element with randomly generated number
  displayRandomNumber(randNum);
}

// Displays the random number generated with an increment animation
function displayRandomNumber(randNum) {
  // Get the current number from the result element
  const currentNum = Number(result.innerHTML);

  // Calculate the difference between the random number and current number
  // Used to find out how much needs to be added to the current number to
  // get to the random number
  const difference = randNum - currentNum;

  // Counts how many intervals the increment animation will have
  let numIntervals;

  // If the difference between the random number and current number is <= 10, set to 15 intervals
  // This is to make it so that the smaller number increment animations aren't too slow
  // Else, set to 40 intervals
  if (difference <= 10) {
    // 150ms animation
    numIntervals = 15;
  } else {
    // 400ms animation
    numIntervals = 40;
  }

  // Calculate how much to increment by per interval
  const incrementValue = difference / numIntervals;

  // Tracks total number of intervals
  let intervalCount = 0;

  // Displays the current number as it increments without modifying the currentNum variable
  let tempValue = currentNum;

  // Increments the current number by the increment value every 10ms until it reaches the total number of intervals
  const valueChanger = setInterval(() => {
    // Increment current number
    tempValue += incrementValue;

    // If true, function is on its last interval
    if (intervalCount == numIntervals - 1) {
      // Display value as rounded to get an accurate whole number, stop function, and return
      result.innerHTML = Math.round(tempValue);
      clearInterval(valueChanger);
      return;
    } else {
      // Display number without the decimal value and increment total interval count
      result.innerHTML = Math.trunc(tempValue);
      intervalCount++;
    }
  }, 10);
}