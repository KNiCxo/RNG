// Get min and max inputs
let minInput = document.getElementById('min');
let maxInput = document.getElementById('max');

// Get generate button and result elements
const generateBtn = document.getElementById('generate-button');
const result = document.getElementById('result');

// Clear inputs on page load
minInput.value = '';
maxInput.value = '';

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

  // Updates result element with randomly generated number
  result.innerHTML = Math.floor(Math.random() * (max - min + 1) + min);
}