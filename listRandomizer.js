// Get elemenets for textarea, randomize button, and table for randomized list
const listInput = document.getElementById('list-input');
const randomizeBtn = document.getElementById('randomize');
const listTable = document.getElementById('list-table');

// Array that will store individual contents of the textarea
let listArray;

// Clear textarea on page load
listInput.value = '';

// Generates randomized list when clicked
randomizeBtn.addEventListener('click', generateRandomList);

// Shuffles the list in the textarea and displays as a table
function generateRandomList() {
  // Set array to empty on function call
  listArray = [];

  // Stores current list element
  let listItem = '';
 
  // Iterates through textarea
  for (let i = 0; i < listInput.value.length; i++) {
    // While no newline is detected and i is less than textarea length, store character at 
    // current location in listItem and go to next character
    while (listInput.value.charAt(i) != '\n' && i < listInput.value.length) {
      listItem += listInput.value.charAt(i);
      i++;
    }

    // When newline is found, push list element into array and clear listItem for next element
    listArray.push(listItem);
    listItem = '';
  }
  
  // Shuffle array and display as a table
  shuffle();
  drawTable();
}

// Shuffles an array in a random order
function shuffle() {
  // Temp array for holding shuffled version of list array
  let temp = [];

  // Iterate through entire list array
  while (listArray.length > 0) {
    // Get a random number between 0 and (listArray.length - 1)
    let randNum = Math.floor(Math.random() * listArray.length);

    // Push element stored at the random index into temp array
    temp.push(listArray[randNum]);

    // Remove element from the list array
    listArray.splice(randNum, 1);
  }

  // Set list array to new shuffled array
  listArray = temp;
}

// Displays the list array as a table
function drawTable() {
  // Clear table HTML to reset it
  listTable.innerHTML = '';

  // Iterate through entire list array
  for (let i = 0; i < listArray.length; i++) {
    // Creates a table row element of list item and appends it to the table
    const tableEntry = document.createElement('tr');
    tableEntry.innerHTML = `<td">${i + 1}. ${listArray[i]}</td>`;
    listTable.append(tableEntry);
  }
}