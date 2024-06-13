// Function to change the background color based on the creature's natural environment
function showHome() {
  const creatures = document.querySelectorAll("div.creature");
  creatures.forEach((creature) => {
    const home = creature.getAttribute("data-home");
    if (home === "land") {
      creature.style.backgroundColor = "green";
    } else if (home === "water") {
      creature.style.backgroundColor = "blue";
    } else if (home === "air") {
      creature.style.backgroundColor = "yellow";
    }
  });
}

// Function to change the border color and style based on the type of creature
function showType() {
  const creatures = document.querySelectorAll("div.creature");
  creatures.forEach((creature) => {
    const type = creature.getAttribute("data-type");
    if (type === "animal") {
      creature.style.border = "2px solid red";
    } else if (type === "insect") {
      creature.style.border = "2px dashed orange";
    }
  });
}

// Function to reset the background color and border styles to their default values
function clearAll() {
  const creatures = document.querySelectorAll("div.creature");
  creatures.forEach((creature) => {
    creature.style.backgroundColor = "white"; // Reset background color
    creature.style.border = "2px solid black"; // Reset border style
  });
}
