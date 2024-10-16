// Select the body element and create a container div
const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');

// Default grid size
const defaultSize = 16; 

// Create the default grid when the page loads
createGrid(defaultSize);

// Get the button element
let button = document.getElementById('grid-button');

// Add event listener for button click
button.addEventListener("click", myFunction);

// Function to handle button click
function myFunction() {
    // Prompt the user for input
    let num = prompt("Please enter a number for the grid size (e.g., 4 for 4x4):");

    // Validate user input
    if (num && !isNaN(num) && num > 0 && num < 64) {
        num = Math.floor(num); // Convert to an integer
        console.log("User input:", num); // Log the input for debugging
        createGrid(num); // Call the function to create the grid
    } else {
        alert("Please enter a valid number between 1 and 63."); // Alert if input is invalid
    }
}

// Function to create the grid
function createGrid(num) {
    // Clear any existing rows in the container
    container.innerHTML = ''; // Clear existing cells
    body.insertBefore(container, body.thirdChild); 

    // Loop to create the grid
    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < num; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');

            // Set the initial color for each cell
            cell.style.backgroundColor = 'grey';

            // Add hover event listener for darkening effect
            // Add hover event listener for random color effect
            cell.addEventListener('mouseover', function() {
                // Generate random RGB values
                const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

                // Apply the random color to the cell's background
                cell.style.backgroundColor = randomColor;
            });


            row.appendChild(cell); // Append cell to the row
        }
        container.appendChild(row); // Append row to the container
    }
}
