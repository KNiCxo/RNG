// Get RNG and List Randomizer buttons
const rngButton = document.getElementById('rng-button');
const listButton = document.getElementById('list-button');

// Get RNG and List Randomizer content
const RNG = document.getElementById('rng');
const listRandomizer = document.getElementById('list');

// Changes to RNG tab when clicked
rngButton.addEventListener('click', () => {
  changeTab('rng');
});

// Changes to List Randomizer tab when clicked
listButton.addEventListener('click', () => {
  changeTab('list');
});

// Clicks element with "default-tab" class to have open on page start
document.querySelector(".default-tab").click(); 

// Changes the tab to either RNG or List Randomizer based on tabName parameter
function changeTab(tabName) {
  // Remove class that adds hover effect to unselected tab
  rngButton.classList.remove('tab-unselected');
  listButton.classList.remove('tab-unselected');
  
  // If parameter is "rng", change to RNG tab
  // Else, change to List Randomizer tab
  if (tabName == 'rng') {
    // Add hover style to other tab
    listButton.classList.add('tab-unselected');

    // Change color of unselected tab and remove from view
    listButton.style.backgroundColor = "rgb(44, 42, 42)";
    listButton.style.color = "white";
    listRandomizer.style.display = "none";

    // Change color of selected tab and make visible
    rngButton.style.backgroundColor = "rgb(32, 30, 30)";
    rngButton.style.color = "rgb(175, 228, 249)";
    RNG.style.display = "block";
  } else {
    // Add hover style to other tab
    rngButton.classList.add('tab-unselected');

    // Change color of selected tab and make visible
    listButton.style.backgroundColor = "rgb(32, 30, 30)";
    listButton.style.color = "rgb(175, 228, 249)";
    listRandomizer.style.display = "block";

    // Change color of unselected tab and remove from view
    rngButton.style.backgroundColor = "rgb(44, 42, 42)";
    rngButton.style.color = "white";
    RNG.style.display = "none";
  }
}