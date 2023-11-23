const rngButton = document.getElementById('rng-button');
const listButton = document.getElementById('list-button');

const RNG = document.getElementById('rng');
const listRandomizer = document.getElementById('list');

rngButton.addEventListener('click', () => {
  changeTab('rng');
});

listButton.addEventListener('click', () => {
  changeTab('list');
});

function changeTab(tabName) {
  rngButton.classList.remove('tab-unselected');
  listButton.classList.remove('tab-unselected');
  
  if (tabName == 'rng') {
    listButton.classList.add('tab-unselected');

    listButton.style.backgroundColor = "rgb(35, 34, 34)";
    listRandomizer.style.display = "none";

    rngButton.style.backgroundColor = "rgb(41, 39, 39)";
    RNG.style.display = "block";
  } else {
    rngButton.classList.add('tab-unselected');

    listButton.style.backgroundColor = "rgb(41, 39, 39)";
    listRandomizer.style.display = "block";

    rngButton.style.backgroundColor = "rgb(35, 34, 34)";
    RNG.style.display = "none";
  }

/*
  // Remove the background color of all tablinks/buttons
  let tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;*/
}

// Get the element with id="defaultOpen" and click on it
document.querySelector(".default-tab").click(); 