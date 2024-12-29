/**
 * Processes the input and updates the display.
 *
 * @param {string} input - The input value to be displayed.
 */
function getInput(input){
    displayValue(input);
}

/**
 * Limits the length of the value in the display input field to a maximum of 10 characters.
 * If the length of the value exceeds 10 characters, it trims the value to the first 10 characters.
 */
function limitDisplay(){
    let display = document.getElementById('display');
    if(display.value.length > 10){
        display.value = display.value.slice(0, 10);
    }
}

/**
 * Appends the given input to the display element's value and limits the display length.
 *
 * @param {string} input - The value to be appended to the display.
 */
function displayValue(input){
    let display = document.getElementById('display');
    display.value += input;
    limitDisplay();
}

/**
 * Parses the current operation displayed on the calculator and evaluates the result.
 * 
 * This function retrieves the value from the element with the ID 'display',
 * evaluates it as a JavaScript expression, and updates the display with the result.
 * 
 * @throws {Error} If the evaluation of the expression fails.
 */
function parseOperation(){
    let display = document.getElementById('display');
    let result = eval(display.value);
    display.value = result;
}


/**
 * Performs the calculation by parsing the operation.
 */
function calculate(){
    parseOperation();
}

/**
 * Clears the calculator display.
 */
function clearDisplay(){
    display.value = '';
}   