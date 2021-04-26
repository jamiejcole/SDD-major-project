// Jamie Cole SDD Major Projet 2021


// Select all of the calculator buttons, appends to array
const buttons = document.querySelectorAll('button');

// Selects the calculator-screen element
const display = document.querySelector('.calculator-screen');

// Adds eventListener to each button, where on clicking it, runs the calculate function
buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
});

// Begin calculate function
function calculate(event) {
    // Get the current clicked buttons value
    const clickedButtonValue = event.target.value;
    console.log('Button press event!: ' + event);

    if (clickedButtonValue === '=') {
        // Check if the display is empty, if not, perform the calculation
        if (display.value !== '') {
            // Calculate and set the display to the answer
            display.value = eval(display.value);
        }

    } else if (clickedButtonValue === 'C') {
        // Clear everything currently on display
        display.value = '';
    } else {
        // otherwise add everything to the display
        display.value += clickedButtonValue;
    }
}